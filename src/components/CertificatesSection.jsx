const certificates = [
  {
    id: 1,
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    image: "/Certificate/Azure.jpg"
  },
  {
    id: 2,
    title: "Semi Finalist in Nexus Hackathon",
    issuer: "Coimbatore Institute of Technology",
    image: "/Certificate/Nexus.jpg"
  },
  {
    id: 3,
    title: "Junior Cybersecurity Analyst",
    issuer: "CISCO Networking Academy",
    image: "/Certificate/Cybersecurity.jpg"
  },
  {
    id: 4,
    title: "IEEE Conference Paper Presentation",
    issuer: "ICSCNA 2024",
    image: "/Certificate/Conference.jpg"
  },
  {
    id: 5,
    title: "Programming in Java",
    issuer: "NPTEL",
    image: "/Certificate/java.jpg"
  },
  {
    id: 6,
    title: "PHP & MySQL for Web Development",
    issuer: "Stack Queue",
    image: "/Certificate/Php.jpg"
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
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
