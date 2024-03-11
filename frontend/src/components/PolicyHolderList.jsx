import React from "react";

const PolicyHolderList = ({ policyHolders, editPolicyHolder, deletePolicyHolder }) => {
    return (
        <div>
            <h2>Policy Holders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Policy Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {policyHolders.map((policyHolder, index) => (
                        <tr key={policyHolder.id}>
                            <td>{policyHolder.name}</td>
                            <td>{policyHolder.email}</td>
                            <td>{policyHolder.policyNumber}</td>
                            <td>
                                <button onClick={() => editPolicyHolder(policyHolder)}>Edit</button>
                                <button onClick={() => deletePolicyHolder(policyHolder.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PolicyHolderList;