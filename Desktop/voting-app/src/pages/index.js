// pages/index.js
import VotingForm from '../components/VotingForm';
import Results from '../components/Results';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Voting App</h1>
        <div className="max-w-lg mx-auto">
          <VotingForm />
          <Results />
        </div>
      </div>
    </div>
  );
}
