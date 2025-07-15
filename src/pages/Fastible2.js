import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import frame from "../assest/post/frame.png";
import image1 from "../assest/post/1 bjp hindi/1.jpg"; 
import image2 from "../assest/post/1 bjp hindi/2.jpg"; 
import image3 from "../assest/post/1 bjp hindi/3.jpg";
import image4 from "../assest/post/1 bjp hindi/4.jpg";
import image5 from "../assest/post/1 bjp hindi/5.jpg";
import image6 from "../assest/post/1 bjp hindi/6.jpg";
import image7 from "../assest/post/1 bjp hindi/7.jpg";
import image8 from "../assest/post/1 bjp hindi/8.jpg";
import image9 from "../assest/post/1 bjp hindi/9.jpg";
import image10 from "../assest/post/1 bjp hindi/10.jpg";
import image11 from "../assest/post/1 bjp hindi/11.jpg";
import image12 from "../assest/post/1 bjp hindi/12.jpg";
import image13 from "../assest/post/1 bjp hindi/13.jpg";
import image14 from "../assest/post/1 bjp hindi/14.jpg";
import image15 from "../assest/post/1 bjp hindi/15.jpg";
import image16 from "../assest/post/1 bjp hindi/16.jpg";
import image17 from "../assest/post/1 bjp hindi/17.jpg";
import image18 from "../assest/post/1 bjp hindi/18.jpg";
import image19 from "../assest/post/1 bjp hindi/19.jpg";
import image20 from "../assest/post/1 bjp hindi/20.jpg";
import image21 from "../assest/post/1 bjp hindi/21.jpg";
import image22 from "../assest/post/1 bjp hindi/22.jpg";
import image23 from "../assest/post/1 bjp hindi/23.jpg";
import image24 from "../assest/post/1 bjp hindi/24.jpg";
import image25 from "../assest/post/1 bjp hindi/25.jpg";
import image26 from "../assest/post/1 bjp hindi/26.jpg";
import image27 from "../assest/post/1 bjp hindi/27.jpg";
import image28 from "../assest/post/1 bjp hindi/28.jpg";
import image29 from "../assest/post/1 bjp hindi/29.jpg";
import image30 from "../assest/post/1 bjp hindi/30.jpg";
import image31 from "../assest/post/1 bjp hindi/31.jpg";
import image32 from "../assest/post/1 bjp hindi/32.jpg";
import image33 from "../assest/post/1 bjp hindi/33.jpg";
import image34 from "../assest/post/1 bjp hindi/34.jpg";
import image35 from "../assest/post/1 bjp hindi/35.jpg";
import image36 from "../assest/post/1 bjp hindi/36.jpg";
import image37 from "../assest/post/1 bjp hindi/37.jpg";
import image38 from "../assest/post/1 bjp hindi/38.jpg";
import image39 from "../assest/post/1 bjp hindi/39.jpg";
import image40 from "../assest/post/1 bjp hindi/40.jpg";
import image41 from "../assest/post/1 bjp hindi/41.jpg";
import image42 from "../assest/post/1 bjp hindi/42.jpg";
import image43 from "../assest/post/1 bjp hindi/43.jpg";
import image44 from "../assest/post/1 bjp hindi/44.jpg";
import image45 from "../assest/post/1 bjp hindi/45.jpg";
import image46 from "../assest/post/1 bjp hindi/46.jpg";
import image47 from "../assest/post/1 bjp hindi/47.jpg";
import image48 from "../assest/post/1 bjp hindi/48.jpg";
import image49 from "../assest/post/1 bjp hindi/49.jpg";
import image50 from "../assest/post/1 bjp hindi/50.jpg";
import image51 from "../assest/post/1 bjp hindi/51.jpg";
import image52 from "../assest/post/1 bjp hindi/52.jpg";
import image53 from "../assest/post/1 bjp hindi/53.jpg";
import image54 from "../assest/post/2 bjp english/54.jpg";
import image55 from "../assest/post/3 holi hindi/55.jpg";
import image56 from "../assest/post/3 holi hindi/56.jpg";
import image57 from "../assest/post/3 holi hindi/57.jpg";
import image58 from "../assest/post/3 holi hindi/58.jpg";
import image59 from "../assest/post/3 holi hindi/59.jpg";
import image60 from "../assest/post/3 holi hindi/60.jpg";
import image61 from "../assest/post/3 holi hindi/61.jpg";
import image62 from "../assest/post/3 holi hindi/62.jpg";
import image63 from "../assest/post/3 holi hindi/63.jpg";
import image64 from "../assest/post/3 holi hindi/64.jpg";
import image65 from "../assest/post/3 holi hindi/65.jpg";
import image66 from "../assest/post/3 holi hindi/66.jpg";
import image67 from "../assest/post/3 holi hindi/67.jpg";
import image68 from "../assest/post/3 holi hindi/68.jpg";
import image69 from "../assest/post/3 holi hindi/69.jpg";
import image70 from "../assest/post/3 holi hindi/70.jpg";
import image71 from "../assest/post/3 holi hindi/71.jpg";
import image72 from "../assest/post/3 holi hindi/72.jpg";
import image73 from "../assest/post/3 holi hindi/73.jpg";
import image74 from "../assest/post/3 holi hindi/74.jpg";
import image75 from "../assest/post/3 holi hindi/75.jpg";
import image76 from "../assest/post/3 holi hindi/76.jpg";
import image77 from "../assest/post/3 holi hindi/77.jpg";
import image78 from "../assest/post/3 holi hindi/78.jpg";
import image79 from "../assest/post/3 holi hindi/79.jpg";
import image80 from "../assest/post/3 holi hindi/80.jpg";
import image81 from "../assest/post/3 holi hindi/81.jpg";
import image82 from "../assest/post/3 holi hindi/82.jpg";
import image83 from "../assest/post/4 holi english/83.jpg";
import image84 from "../assest/post/4 holi english/84.jpg";
import image85 from "../assest/post/4 holi english/85.jpg";
import image86 from "../assest/post/4 holi english/86.jpg";
import image87 from "../assest/post/4 holi english/87.jpg";
import image88 from "../assest/post/4 holi english/88.jpg";

const Fastible2 = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  // Array of imported images
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
    image36,
    image37,
    image38,
    image39,
    image40,
    image41,
    image42,
    image43,
    image44,
    image45,
    image46,
    image47,
    image48,
    image49,
    image50,
    image51,
    image52,
    image53,
    image54,
    image55,
    image56,
    image57,
    image58,
    image59,
    image60,
    image61,
    image62,
    image63,
    image64,
    image65,
    image66,
    image67,
    image68,
    image69,
    image70,
    image71,
    image72,
    image73,
    image74,
    image75,
    image76,
    image77,
    image78,
    image79,
    image80,
    image81,
    image82,
    image83,
    image84,
    image85,
    image86,
    image87,
    image88,
  ];

  const titles = [
    "BJP (Hindi)", /** 1 */
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (Hindi)",
    "BJP (English)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (Hindi)",
    "HOLI (English)",
    "HOLI (English)",
    "HOLI (English)",
    "HOLI (English)",
    "HOLI (English)",
    "HOLI (English)",
  ];

  // Create an array of refs for each image
  const imageRefs = useRef(images.map(() => React.createRef()));

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to download the image as PNG
  const handleDownload = (index) => {
    const ref = imageRefs.current[index];
    if (ref.current) {
      html2canvas(ref.current).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = `downloaded-image-${index + 1}.png`;
        link.click();
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 p-2 border rounded"
      />
      <div className="mb-4 p-2 border rounded">
        <h6>Create Post</h6>
        <p>1. BJP (Hindi) - Post-1 to Post-53 </p>
        <p>2. BJP (English) - Post-54 to Post-54 </p>
        <p>3. HOLI (Hindi) - Post-55 to Post-82 </p>
        <p>4. HOLI (English) - Post-83 to Post-88 </p>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((imgSrc, index) => (
          <div key={index} className="border p-4">
            <div className="mb-2">
              POST-{index + 1} {titles[index] || "Default Title"}
              {/* (Hindi/English) */}
            </div>
            <div ref={imageRefs.current[index]}>
              <img
                src={imgSrc}
                alt={`Image ${index + 1}`}
                className="w-full h-auto mb-2"
              />
              <img
                src={uploadedImage || frame}
                alt={`Overlay ${index + 1}`}
                className="lg:mt-[-55px] sm:mt-[-150px] md:mt-[-200px] mt-[-100px]"
              />
            </div>
            <button
              onClick={() => handleDownload(index)}
              className="mt-2 p-2 bg-blue-500 text-white rounded"
            >
              Download as PNG
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fastible2;
