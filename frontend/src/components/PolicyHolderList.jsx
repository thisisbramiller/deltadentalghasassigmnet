import React from "react";

/**
 * Renders a list of policy holders.
 *
 * @component
 * @param {Object[]} policyHolders - An array of policy holders.
 * @param {Function} editPolicyHolder - A function to edit a policy holder.
 * @param {Function} deletePolicyHolder - A function to delete a policy holder.
 * @returns {JSX.Element} The rendered PolicyHolderList component.
 */
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
                            <th scope="row">{index + 1}</th>
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