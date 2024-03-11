import { useState } from 'react';
import api from '../api/axiosConfig';
import PolicyHolderList from './PolicyHolderList';

const PolicyHolderCrud = ({ load, policyHolders }) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [policyNumber, setPolicyNumber] = useState("");

    async function save(event) {
        event.preventDefault();

        await api.post("/create", {
            name: name,
            email: email,
            policyNumber: policyNumber
        });

        alert("Policy Holder created successfully!");

        setId("");
        setName("");
        setEmail("");
        setPolicyNumber("");
        
        load();
    }
    
    async function editPolicyHolder(policyHolder) {
        setId(policyHolder.id);
        setName(policyHolder.name);
        setEmail(policyHolder.email);
        setPolicyNumber(policyHolder.policyNumber);
    }
}