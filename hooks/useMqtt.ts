'use client'
import { useEffect, useState } from 'react';
import mqtt from 'mqtt';

export function useMqtt(){
const [message, setMessage] = useState<any>(null);
const [isConnected, setIsConnected] = useState(false);
const [healthStatus, setHealthStatus] = useState('Unknown');
const [messageTimer, setMessageTimer] = useState<any>(null); // Timer for checking message

useEffect(()=>{
    const options = {
        connectTimeout: 4000,
        clientId: `mqtt_${Math.random().toString(16).slice(3)}`,
        keepalive: 60,
        clean: true,
        debug: true 
      };
  
      const client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt', options);

    client.on('connect', () => {
        console.log('Connected to MQTT broker');
        setIsConnected(true);
  
        // Subscribe to the health check topic
        client.subscribe('esp32/health', (err) => {
            if (!err) {
                console.log('Subscribed to esp32/health');
            }
        });
    });
    // When a message is received
    client.on('message', (topic, payload) => {
        const message = payload.toString();
        if (topic === 'esp32/health') {
          console.log(`Health message: ${message}`);
          setHealthStatus(message);
        }
        setMessage({ topic, message });
        // Reset the timer whenever a message is received
        if (messageTimer) {
            clearTimeout(messageTimer);
        }
        const timer = setTimeout(() => {
            setHealthStatus('Unknown');
            setMessage(null);
        }, 10000); // Reset to null if no message in 5 seconds

        setMessageTimer(timer);
    });

    client.on('error', (error) => {
        console.log('MQTT Error: ', error);
        client.end();
    });

    return () => {
        client.end();
        if (messageTimer) {
            clearTimeout(messageTimer);
        }
    };
    
},[messageTimer])


return { message, isConnected, healthStatus };

}