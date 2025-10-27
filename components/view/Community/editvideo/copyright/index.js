import React from "react";
import { CheckCircle } from "lucide-react"; // ✅ for green check icons

function Copyrightpage() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        minHeight: "90vh",
        padding: "40px",
        fontFamily: "Roboto, Arial, sans-serif",
        color: "#0f0f0f",
      }}
    >
      {/* PAGE TITLE */}
      <h2 style={{ fontSize: "1.6rem", fontWeight: 500, marginBottom: "30px" }}>
        Copyright
      </h2>

      {/* WHAT HAPPENED SECTION */}
      <section style={{ marginBottom: "40px" }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 500, marginBottom: "16px" }}>
          What happened
        </h3>
        <p style={{ fontSize: "1rem", color: "#333", marginBottom: "25px" }}>
          No copyright issues were found in your video.
        </p>

        {/* SUMMARY CARDS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Channel Card */}
          <div
            style={{
              flex: "1 1 250px",
              backgroundColor: "#f9f9f9",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <CheckCircle color="#0f9d58" size={28} />
            <div>
              <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 500 }}>
                Channel
              </h4>
              <p style={{ margin: "6px 0 0 0", color: "#333" }}>
                Your channel isn't affected.
              </p>
            </div>
          </div>

          {/* Visibility Card */}
          <div
            style={{
              flex: "1 1 250px",
              backgroundColor: "#f9f9f9",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <CheckCircle color="#0f9d58" size={28} />
            <div>
              <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 500 }}>
                Visibility
              </h4>
              <p style={{ margin: "6px 0 0 0", color: "#333" }}>
                There are no visibility restrictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT USED TABLE */}
      <section>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 500, marginBottom: "16px" }}>
          Content used
        </h3>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#f8f8f8",
              padding: "12px 16px",
              fontWeight: 500,
            }}
          >
            <div style={{ flex: 2 }}>Content used</div>
            <div style={{ flex: 1 }}>Content type</div>
            <div style={{ flex: 1 }}></div>
          </div>

          {/* Table Row (Empty State) */}
          <div
            style={{
              padding: "20px 16px",
              textAlign: "center",
              color: "#555",
              fontSize: "0.95rem",
            }}
          >
            No copyrighted content was found in your video.
          </div>
        </div>
      </section>
    </div>
  );
}

export default Copyrightpage;
