export default function Recognition() {
    const awards = [
      {
        img: "https://www.onehealthhospitals.com/wp-content/uploads/2024/11/international-patient-service.jpg",
        text: "Best Emergency & Critical Care Hospital by CII TN Medclave",
      },
      {
        img: "https://www.onehealthhospitals.com/wp-content/uploads/2024/11/international-patient-service.jpg",
        text: "City's Best Hospital Award by Insurance Alerts",
      },
      {
        img: "https://www.onehealthhospitals.com/wp-content/uploads/2024/11/international-patient-service.jpg",
        text: "Best Performer under CMCHIS by T.M. Anbarasan, Hon’ble Minister",
      },
      {
        img: "https://www.onehealthhospitals.com/wp-content/uploads/2024/11/international-patient-service.jpg",
        text: "City's Best Emerging Hospital Award by Insurance Alerts",
      },
      {
        img: "https://www.onehealthhospitals.com/wp-content/uploads/2024/11/international-patient-service.jpg",
        text: "Best Emergency & Critical Care Hospital by Ma. Subramaniam, Hon’ble Health Minister",
      },
    ];
  
    return (
      <section className="px-6 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-10 text-center">
          Recognition
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="max-w-sm w-full mx-auto rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* Image */}
              <img
                src={award.img}
                alt={award.text}
                className="w-full h-56 object-cover"
              />
  
              {/* Caption */}
              <div className="bg-blue-600 text-white text-base md:text-lg font-semibold text-center px-6 py-4">
                {award.text}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  