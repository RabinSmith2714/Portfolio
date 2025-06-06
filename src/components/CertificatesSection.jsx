import { ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Coursera",
    image: "/Certificate/Azure.jpg",
    certificateUrl: "https://example.com/certificate1",
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    issuer: "Cisco Networking Academy",
    image: "/Certificate/CyberSecurity.jpg",
    certificateUrl: "https://example.com/certificate2",
  },
  {
    id: 3,
    title: "React Frontend Developer",
    issuer: "Meta",
    image: "/Certificate/IOT.jpg",
    certificateUrl: "https://example.com/certificate3",
  },
  {
    id: 4,
    title: "PHP & MySQL Development",
    issuer: "Udemy",
    image: "/Certificate/java.jpg",
    certificateUrl: "https://example.com/certificate4",
  },
  {
    id: 5,
    title: "Git and GitHub Mastery",
    issuer: "LinkedIn Learning",
    image: "/Certificate/Nexus.jpg",
    certificateUrl: "https://example.com/certificate5",
  },
  {
    id: 6,
    title: "MongoDB Basics",
    issuer: "MongoDB University",
    image: "/Certificate/Php.jpg",
    certificateUrl: "https://example.com/certificate6",
  },
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary"> Certificates</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These certifications reflect my commitment to learning and growing as a developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Issued by: {cert.issuer}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
