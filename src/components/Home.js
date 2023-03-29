import React from 'react';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="home" data-testid="Home">
      <div className="card card-1">
        Welcome to our web app, the ultimate destination for anyone looking to
        improve their day-to-day life with a variety of tools and resources.
        Whether you&#39;re looking for a reliable calculator for your
        mathematical needs or a source of inspiration to brighten your day,
        we&#39;ve got you covered.
      </div>
      <div className="card card-2">
        Our calculator is a versatile and easy-to-use tool that can handle a
        wide range of calculations, from basic arithmetic to complex equations.
        Whether you&#39;re a student, a professional, or just someone who likes
        to crunch numbers, our calculator will help you get the job done quickly
        and accurately.
      </div>
      <div className="card card-3">
        But that&#39;s not all - we also have a random quote generator that will
        provide you with a fresh dose of inspiration whenever you need it. Our
        database contains thousands of carefully curated quotes from some of the
        world&#39;s most influential thinkers, writers, and leaders, so
        you&#39;re sure to find something that resonates with you.
      </div>
      <div className="card card-4">
        Whether you&#39;re in need of a quick calculation or a burst of motivation,
        our web app is the perfect solution. So why wait? Try it out today and
        see how it can improve your life!
      </div>
    </div>
  );
}
