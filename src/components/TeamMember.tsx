
interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
  };
}

const TeamMember = ({ member }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-primary mb-1">{member.name}</h3>
        <p className="text-accent mb-4">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
