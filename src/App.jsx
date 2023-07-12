import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(null);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState(1);
  let tipAmount;
  let total;
  let error;

  // Validation
  if (people === "") {
    error = "Can't be zero";
  } else {
    // Calculate the tip amount
    if (customTip === "") {
      if (tip !== null) {
        tipAmount = (Number(bill) * Number(tip)) / 100 / Number(people);
      }
    } else {
      tipAmount = Number(customTip) / Number(people);
    }

    // Calculate the total
    total = Number(bill) / Number(people) + tipAmount;
    if (isNaN(total)) total = 0;
  }

  useEffect(() => {
    if (customTip !== null) setTip(null);
  }, [customTip, setCustomTip]);

  useEffect(() => {
    if (tip !== null) setCustomTip("");
  }, [tip, setTip]);

  function reset() {
    setBill("");
    setTip(null);
    setCustomTip("");
    setPeople(1);
  }

  tipAmount = tipAmount ? tipAmount : 0;

  tipAmount = parseFloat(tipAmount).toFixed(2).replace(/\.00$/, "");
  total = parseFloat(total).toFixed(2).replace(/\.00$/, "");

  return (
    <div className="min-h-screen bg-tw-light-grayish-cyan grid place-items-center">
      <main>
        <figure className="text-center mb-10 md:mb-12">
          <img src="./images/logo.svg" alt="logo" className="inline" />
        </figure>

        <div className="bg-tw-white rounded-2xl p-6 md:p-8 shadow-sm ring-zinc-950/10 md:grid md:grid-cols-2 md:gap-10 md:max-w-4xl">
          <section className="md:basis-1/2 md:p-4">
            <h1 className="sr-only">tip calculator</h1>

            <div>
              <label className="form-label" htmlFor="bill">
                Bill
              </label>
              <div className="relative md:mt-2">
                <input
                  type="text"
                  id="bill"
                  className={`form-input mt-1`}
                  placeholder="0"
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                />

                <img
                  src="./images/icon-dollar.svg"
                  alt="dollar icon"
                  className="form-icon mt-0.5"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="select-tip" className="form-label capitalize">
                select tip %
              </label>

              <div className="grid grid-cols-2 gap-3 mt-2 md:grid-cols-3">
                {[5, 10, 15, 25, 50].map((perc) => (
                  <button
                    key={perc}
                    className={`bg-tw-dark-cyan text-tw-white rounded-lg py-2 text-xl md:text-2xl tracking-wider hover:bg-[#9fe8df] hover:text-tw-dark-cyan transition my-ring ${
                      perc === tip && "!bg-[#9fe8df] !text-tw-dark-cyan"
                    }`}
                    onClick={() => setTip(perc)}
                  >
                    {perc}%
                  </button>
                ))}
                <input
                  type="text"
                  id="select-tip"
                  placeholder="Custom"
                  className="form-input placeholder:text-tw-dark-cyan/60"
                  value={customTip}
                  onChange={(e) => setCustomTip(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <label htmlFor="number-of-people" className="form-label">
                  Number of People
                </label>

                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>

              <div className="relative md:mt-2">
                <input
                  type="text"
                  placeholder="0"
                  className={`form-input placeholder:text-tw-dark-grayish-cyan ${
                    error && "ring-2 ring-red-500 focus:outline-red-500"
                  }`}
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />

                <img
                  src="./images/icon-person.svg"
                  alt="person icon"
                  className="form-icon"
                />
              </div>
            </div>
          </section>

          <section className="bg-tw-dark-cyan rounded-xl md:rounded-2xl p-4 md:p-10 mt-8 md:mt-0 md:basis-1/2 md:flex md:flex-col md:gap-10">
            <h1 className="sr-only">tip amount</h1>

            <div className="flex items-center justify-between">
              <p>
                <span className="text-tw-white text-sm md:text-lg">
                  Tip Amount
                </span>
                <span className="text-tw-grayish-cyan block text-xs md:text-base">
                  / person
                </span>
              </p>

              <p className="text-2xl md:text-5xl text-tw-cyan truncate">
                ${tipAmount === 0 ? "0.00" : tipAmount}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <p>
                <span className="text-tw-white text-sm md:text-lg">Total</span>
                <span className="text-tw-grayish-cyan block text-xs md:text-base">
                  / person
                </span>
              </p>

              <p className="text-2xl md:text-5xl text-tw-cyan">
                ${total === 0 ? "0.00" : total}
              </p>
            </div>

            <div className="hidden md:block md:flex-1"></div>

            <button
              className="w-full text-tw-dark-cyan bg-tw-cyan uppercase tracking-wider mt-6 rounded-lg py-2 md:text-xl hover:bg-[#9fe8df] transition my-ring focus:ring-offset-tw-dark-cyan"
              onClick={reset}
            >
              Reset
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
