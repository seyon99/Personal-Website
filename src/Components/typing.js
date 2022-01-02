// var instance = new TypeIt('#type-it', {
//     speed: 100,
//     loop:true,
//     strings: [
//       'Software Developer',
//       'Msuic Lover',
//       'Hiking Enthusiast',
//       'Foodie'
//     ],
//     breakLines: false
// });

import TypeIt from "typeit-react";

export default () => {
  return (
    <div className="App">
      <TypeIt element={"h3"}>This will be typed in an H3 tag.</TypeIt>
    </div>
  );
};

export default () => {
    return (
        <div className="App">
            <TypeIt
                options={{
                    strings: [
                        'Software Developer',
                        'Music Lover',
                        'Hiking Enthusiast',
                        'Foodie'
                    ],
                    speed: 10,
                    waitUntilVisible: true,
                }}
            />
        </div>
    );
};