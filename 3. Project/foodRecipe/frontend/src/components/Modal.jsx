import React from "react";

export default function Modal() {
  return (
    <>
      <div className="backdrop">
        <dialog className="modal" open></dialog>
      </div>
    </>
  );
}
