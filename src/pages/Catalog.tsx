import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";
import BrandName from "@/components/BrandName";

const catalogImages = [
  "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5f361786-3a0b-4947-8ced-628088c94804/ZINEniac+Catalog+%281%29_00002.jpg",
  "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8c890423-8e2d-44df-b1fc-7a074a7e6950/ZINEniac+Catalog+%281%29_00003.jpg",
  "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1bb0c11f-7ad3-4161-9ccc-8f14e2534e0c/ZINEniac+Catalog+%281%29_00005.jpg",
  "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c93b266b-4168-4a24-997e-368a595e6c90/ZINEniac+Catalog+%281%29_00006.jpg",
  "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7d873bdb-89ec-4f49-a218-83ebc254d7b1/ZINEniac+Catalog+%281%29_00007.jpg",
  "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8c136599-7be4-4068-9212-2acc2ef10f8d/ZINEniac+Catalog+%281%29_00008.jpg",
  "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ff6d6bb5-7d1c-4115-923c-78148570dc90/ZINEniac+Catalog+%281%29_00009.jpg",
  "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7235cb3c-4ac6-4801-a349-49adfa571214/ZINEniac+Catalog+%281%29_00010.jpg",
];

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = catalogImages.length;

  const goTo = (page: number) => {
    if (page >= 0 && page < totalPages) setCurrentPage(page);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-2">
              <BrandName className="text-4xl md:text-6xl" /> Catalog
            </h1>
          </div>

          {/* Main Slider */}
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => goTo(currentPage - 1)}
                disabled={currentPage === 0}
                className="shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform disabled:opacity-30 disabled:hover:scale-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <img
                src={catalogImages[currentPage]}
                alt={`ZINEniac Catalog page ${currentPage + 1}`}
                className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-3xl shadow-2xl transition-opacity duration-300 block"
              />
              <button
                onClick={() => goTo(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                className="shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform disabled:opacity-30 disabled:hover:scale-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center mt-6 text-lg font-bold text-foreground">
              Page {currentPage + 1} of {totalPages}
            </div>
          </div>

          {/* Thumbnail Pagination Strip */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="flex gap-3 justify-center flex-wrap">
              {catalogImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-20 h-14 md:w-24 md:h-16 rounded-xl overflow-hidden border-3 transition-all duration-200 ${
                    i === currentPage
                      ? "border-primary ring-2 ring-primary/40 scale-110 shadow-lg"
                      : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Page ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Catalog;
