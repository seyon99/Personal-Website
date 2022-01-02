import React, { Component } from 'react';
import TypeIt from 'typeit-react';

function Typer() {
    return (
        <div className="App">
            <TypeIt
                options={{
                    strings: [
                        'Software Developer',
                        'Hiking Enthusiast',
                        'Music Lover',
                        'Foodie'
                    ],
                    speed: 10,
                    waitUntilVisible: true,
                    loop: true,
                }}
            />
        </div>
    );
  }