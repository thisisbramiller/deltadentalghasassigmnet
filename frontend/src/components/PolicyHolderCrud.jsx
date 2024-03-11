import { useState } from 'react';
import api from '../api/axiosConfig';
import PolicyHolderList from './PolicyHolderList';

const PolicyHolderCrud = ({ load, policyHolders }) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [policyNumber, setPolicyNumber] = useState("");

    async function savePolicyHolder(event) {
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

    async function deletePolicyHolder(id) {
        await api.delete(`/delete/${id}`);
        alert("Policy Holder deleted successfully!");
        load();
    }

    async function updatePolicyHolder(event) {
        event.preventDefault();

        if (!id) return alert("Please select a policy holder to update!");

        await api.put("/update", { id: id, name: name, email: email, policyNumber: policyNumber });

        alert("Policy Holder updated successfully!");

        setId("");
        setName("");
        setEmail("");
        setPolicyNumber("");
        load();
    }
}