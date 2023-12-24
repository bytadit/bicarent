export default function Faq() {
  const listQuestions = [
    {
      question: "Apa saja syarat yang dibutuhkan?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
    },
    {
      question: "Berapa hari minimal sewa mobil lepas kunci?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
    },
    {
      question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
    },
    {
      question: "Apakah Ada biaya antar-jemput?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
    },
    {
      question: "Bagaimana jika terjadi kecelakaan?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
    },
  ];
  return (
    <section id="faq">
      <div className="container-fluid byt-container mx-auto row row-cols-1 row-cols-lg-2">
        <div className="col col-lg-5 text-center text-lg-start">
          <h4 className="fw-bold byt-title">Frequently Asked Question</h4>
          <p className="byt-fs-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="col col-lg-7 px-0">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {listQuestions.map((item, index) => (
              <div className={`accordion-item border border-2 rounded-2 ${index > 0 ? 'mt-2' : ''}`} key={index}>
                <h2 className="accordion-header" id={`flush-heading${index}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${index}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`flush-collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`flush-heading${index}`}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
