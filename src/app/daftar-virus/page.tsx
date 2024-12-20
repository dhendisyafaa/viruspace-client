import ListOfViruses from "@/components/ListOfViruses";

export default function ListOfVirusesPage() {
  return (
    <div className="w-[90vw] pb-10 mx-auto">
      <div className="text-center pb-10 space-y-3">
        <p className="text-xl md:text-3xl font-extrabold text-primary uppercase">
          Apa Itu virus?
        </p>
        <p className="text-base mx-auto md:text-xl md:w-[60vw] text-primary">
          Virus adalah{" "}
          <span className="font-bold">mikroorganisme yang sangat kecil</span>,
          bahkan lebih kecil dari bakteri dan hanya dapat dilihat menggunakan
          mikroskop elektron. Virus memiliki struktur yang sangat sederhana,
          terdiri dari{" "}
          <span className="font-bold">materi genetik (DNA atau RNA)</span> yang
          dilindungi oleh lapisan protein (kapsid)
        </p>
      </div>
      <ListOfViruses />
    </div>
  );
}
