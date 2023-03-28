import React from 'react';
import '../styles/home.css';

export default function Home() {
  const cards = [
    {
      id: 1,
      details: `Welcome to our web app, the ultimate destination for anyone looking to
      improve their day-to-day life with a variety of tools and resources.
      Whether you&#39;re looking for a reliable calculator for your
      mathematical needs or a source of inspiration to brighten your day,
      we&#39;ve got you covered.`,
    },
    {
      id: 2,

      details: `Our calculator is a versatile and easy-to-use tool that can handle a
wide range of calculations, from basic arithmetic to complex equations.
Whether you&#39;re a student, a professional, or just someone who likes
to crunch numbers, our calculator will help you get the job done quickly
and accurately.`,
    },
    {
      id: 3,

      details: `But that&#39;s not all - we also have a random quote generator that will
      provide you with a fresh dose of inspiration whenever you need it. Our
      database contains thousands of carefully curated quotes from some of the
      world&#39;s most influential thinkers, writers, and leaders, so
      you&#39;re sure to find something that resonates with you.`,
    },
    {
      id: 4,

      details: `Whether you&#39;re in need of a quick calculation or a burst of motivation,
      our web app is the perfect solution. So why wait? Try it out today and
      see how it can improve your life!`,
    },
  ];
  return (
    <div className="home" data-testid="Home">
      {cards.map((item) => (
        <div key={item.id} className={`card card-${item.id}`}>
          {item.details}
        </div>
      ))}
    </div>
  );
}
