import { useState } from 'react';
import api from '../api/axiosConfig';
import PolicyHolderList from './PolicyHolderList';

/**
 * Renders a form for creating, updating, and deleting policy holders.
 *
 * @component
 * @param {Function} load - A function to load the policy holders.
 * @param {Array} policyHolders - An array of policy holders.
 * @returns {JSX.Element} The PolicyHolderCrud component.
 */
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

    return (
        <div>
            <form onSubmit={id ? updatePolicyHolder : savePolicyHolder}>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="text" placeholder="Policy Number" value={policyNumber} onChange={e => setPolicyNumber(e.target.value)} />
                <input type="text" hidden value={id} onChange={e => setId(e.target.value)} />
                <button type="submit">{id ? "Update" : "Save"}</button>
            </form>

            <PolicyHolderList policyHolders={policyHolders} editPolicyHolder={editPolicyHolder} deletePolicyHolder={deletePolicyHolder} />
        </div>
    );
};

export default PolicyHolderCrud;