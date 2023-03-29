import React from 'react';
import '../styles/home.css';

export default function Home() {
  const cards = [
    {
      details: `Welcome to our web app, the ultimate destination for anyone looking to
      improve their day-to-day life with a variety of tools and resources.
      Whether you're looking for a reliable calculator for your
      mathematical needs or a source of inspiration to brighten your day,
      we've got you covered.`,
    },
    {
      details: `Our calculator is a versatile and easy-to-use tool that can handle a
      wide range of calculations, from basic arithmetic to complex equations.
      Whether you're a student, a professional, or just someone who likes
      to crunch numbers, our calculator will help you get the job done quickly
      and accurately.`,
    },
    {
      details: ` But that's not all - we also have a random quote generator that will
      provide you with a fresh dose of inspiration whenever you need it. Our
      database contains thousands of carefully curated quotes from some of the
      world's most influential thinkers, writers, and leaders, so
      you're sure to find something that resonates with you.`,
    },
    {
      details: `Whether you're in need of a quick calculation or a burst of motivation,
      our web app is the perfect solution. So why wait? Try it out today and
      see how it can improve your life!`,
    },
  ];
  return (
    <div className="home" data-testid="Home">
      {cards.map((item) => <div key={cards.indexOf(item)} className={`card card-${cards.indexOf(item) + 1}`}>{item.details}</div>)}
    </div>
  );
}
