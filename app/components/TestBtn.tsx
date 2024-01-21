'use client'
import React from 'react';

async function handlefunction() {
  alert("Click me");
  await fetch('/api/hello')
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function handleClick() {
  handlefunction();
}

export default function TestBtn() {
  return (
    <div>
      <button onClick={handleClick}>A</button>
    </div>
  );
}
