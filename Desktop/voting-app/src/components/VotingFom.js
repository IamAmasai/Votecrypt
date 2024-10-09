// components/VotingForm.js
import { useState } from 'react';

export default function VotingForm() {
  const [vote, setVote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleVote = (e) => {
    e.preventDefault();
    if (!vote) return;
    setSubmitted(true);
    // Add your voting submission logic here
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Cast Your Vote</h2>
      {!submitted ? (
        <form onSubmit={handleVote}>
          <label className="block mb-2 text-sm font-medium">
            Choose your candidate:
          </label>
          <select
            className="w-full px-4 py-2 mb-4 border rounded-md"
            value={vote}
            onChange={(e) => setVote(e.target.value)}
          >
            <option value="">Select a candidate</option>
            <option value="Candidate 1">Candidate 1</option>
            <option value="Candidate 2">Candidate 2</option>
          </select>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
          >
            Submit Vote
          </button>
        </form>
      ) : (
        <p className="text-green-600">Thank you for voting!</p>
      )}
    </div>
  );
}
