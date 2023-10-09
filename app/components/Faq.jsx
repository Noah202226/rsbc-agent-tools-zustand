"use client";
const Faq = () => {
  return (
    <div className="overflow-scroll max-h-96">
      <div className="p-1 border bg-gray-700 rounded-box mb-2">
        <div className="chat chat-start">
          <div className="chat-bubble">How much money can I loan?</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">
            <a
              className="tooltip tooltip-left cursor-pointer tooltip-primary"
              data-tip="Click to copy"
              onClick={() =>
                navigator.clipboard.writeText("20,000 to 2,000,000")
              }
            >
              20,000 to 2,000,000(2M)
            </a>
          </div>
        </div>
      </div>

      <div className="p-1 border bg-gray-700 rounded-box mb-2">
        <div className="chat chat-start">
          <div className="chat-bubble">
            How many days of appliaction process?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">
            <a
              className="tooltip tooltip-left cursor-pointer tooltip-primary"
              data-tip="Click to copy"
              onClick={() => navigator.clipboard.writeText("1 to 3 weeks")}
            >
              1 to 3 weeks
            </a>
          </div>
        </div>
      </div>
      <div className="p-1 border bg-gray-700 rounded-box mb-2">
        <div className="chat chat-start">
          <div className="chat-bubble">
            How many days of appliaction process?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">
            <a
              className="tooltip tooltip-left cursor-pointer tooltip-primary"
              data-tip="Click to copy"
              onClick={() => navigator.clipboard.writeText("1 to 3 weeks")}
            >
              1 to 3 weeks
            </a>
          </div>
        </div>
      </div>
      <div className="p-1 border bg-gray-700 rounded-box mb-2">
        <div className="chat chat-start">
          <div className="chat-bubble">
            How many days of appliaction process?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">
            <a
              className="tooltip tooltip-left cursor-pointer tooltip-primary"
              data-tip="Click to copy"
              onClick={() => navigator.clipboard.writeText("1 to 3 weeks")}
            >
              1 to 3 weeks
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
