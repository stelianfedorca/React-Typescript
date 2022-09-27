import React from 'react';

function identity<Type>(arg: Type): Type {
  return arg;
}

// Union types
function padLeft(value: string, padding: string | number) {}

// let indentedString = padLeft('Hello world', true);

// Intersection Types
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.log(response.error.message);
    return;
  }

  console.log(response.artists);
};

// Type Aliases
type Point = {
  x: number;
  y: number;
};

function printCoordinate(pt: Point) {
  console.log('The coordinate of x and y is: ', pt.x, pt.y);
}

printCoordinate({ x: 10, y: 3 });

type ID = number | string;

// Generic Constrains
interface Lengthwise {
  length: number;
}
function logginIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  console.log(arg);
  return arg;
}

export default function Generics() {
  let output = identity('My String');
  console.log(output);

  let logginOutput = logginIdentity({ length: 10, value: 3 });
  return <></>;
}
