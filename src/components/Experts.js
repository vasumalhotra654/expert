import { faInstagram, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
const FitnessApp = () => {
  return (
    <div className='body'>
      <div className="p-5 border rounded-md shadow-lg hover:shadow-xl text-gray-500 w-full sm:w-1/2 m-2 transition-transform transform hover:scale-105">
        <div className="flex items-center">
          <img className="w-16 h-16 rounded mr-4 " src="https://loremflickr.com/320/320/girl" alt="jane" />
          <div className="text-sm">
            <a href="#"
              className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
              Jane Doe
            </a>
            <p>Blogger &amp; Youtuber</p>
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-900">
          Lorem ipsum dolor sit amet, consecte adipisicing elit. Voluptatibus quia
          Maiores et perferendis eaque
        </p>
        <button className="bg-white text-sm  hover:bg-green-500 text-green-500 font-medium py-2 my-5 px-4 rounded-full border border-green-500 hover:text-white hover:border-transparent">
  Schedule a Demo
</button>
        <div className="flex mt-4">
        <a href="/#" className="w-6 mx-1">
            <FontAwesomeIcon icon={faFacebook} style={{ color: 'blue' }} />
          </a>
          <a href="/#" className="w-6 mx-1">
            <FontAwesomeIcon icon={faTelegram} style={{ color: '#0088cc' }} />
          </a>
          <a href="/#" className="w-6 mx-1">
            <FontAwesomeIcon icon={faInstagram} style={{ color: '#e4405f' }} />
          </a>
          <a href="/#" className="w-6 mx-1">
            <FontAwesomeIcon icon={faYoutube} style={{ color: '#c4302b' }} />
          </a>
      
        </div>
      </div>
    </div>
  );
};

export default FitnessApp;
