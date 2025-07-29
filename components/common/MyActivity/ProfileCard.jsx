import Image from "next/image";
import proimg from "@/public/images/profile-circle.png";

export default function ProfileCard() {
  return (
    <div className="flex items-center mb-4">
      <Image
        src={proimg}
        alt="Avatar"
        width={96}  
        height={96} 
        className="rounded-full border mr-4"
      />
      <div>
        <h2 className="text-xl font-semibold">Edureka Guest</h2>
      </div>
    </div>
  );
}
