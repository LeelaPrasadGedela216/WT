
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as bootstrap from 'bootstrap';
const elements = [
    {
      id: 1,
      symbol: 'H',
      atomicWeight: '1.008',
      electronConfig: '1s1',
      group: '1',
      period: '1',
      category: 'nonmetal',
      description: 'Hydrogen is the first element on the periodic table.',
      uses: 'Used in fuel cells, hydrogenation, and more.',
      color: 'bg-primary'
    },
    {
      id: 2,
      symbol: 'He',
      atomicWeight: '4.0026',
      electronConfig: '1s2',
      group: '18',
      period: '1',
      category: 'noble gas',
      description: 'Helium is a colorless, odorless, and inert gas.',
      uses: 'Used in balloons, cryogenics, and as a coolant.',
      color: 'bg-secondary'
    },
    {
      id: 3,
      symbol: 'Li',
      atomicWeight: '6.94',
      electronConfig: '[He] 2s1',
      group: '1',
      period: '2',
      category: 'alkali metal',
      description: 'Lithium is a soft, silvery metal.',
      uses: 'Used in batteries and mood-stabilizing drugs.',
      color: 'bg-success'
    },
    {
      id: 4,
      symbol: 'Be',
      atomicWeight: '9.0122',
      electronConfig: '[He] 2s2',
      group: '2',
      period: '2',
      category: 'alkaline earth metal',
      description: 'Beryllium is a lightweight, strong metal.',
      uses: 'Used in aerospace components and X-ray windows.',
      color: 'bg-warning'
    },
    {
      id: 5,
      symbol: 'B',
      atomicWeight: '10.81',
      electronConfig: '[He] 2s2 2p1',
      group: '13',
      period: '2',
      category: 'metalloid',
      description: 'Boron is a metalloid used in detergents and glass.',
      uses: 'Used in fiberglass, ceramics, and detergents.',
      color: 'bg-danger'
    },
    {
      id: 6,
      symbol: 'C',
      atomicWeight: '12.011',
      electronConfig: '[He] 2s2 2p2',
      group: '14',
      period: '2',
      category: 'nonmetal',
      description: 'Carbon is the basis for organic chemistry.',
      uses: 'Used in steel, diamonds, and carbon fiber.',
      color: 'bg-primary'
    },
    {
      id: 7,
      symbol: 'N',
      atomicWeight: '14.007',
      electronConfig: '[He] 2s2 2p3',
      group: '15',
      period: '2',
      category: 'nonmetal',
      description: 'Nitrogen makes up 78% of the Earth’s atmosphere.',
      uses: 'Used in fertilizers and cryogenics.',
      color: 'bg-info'
    },
    {
      id: 8,
      symbol: 'O',
      atomicWeight: '15.999',
      electronConfig: '[He] 2s2 2p4',
      group: '16',
      period: '2',
      category: 'nonmetal',
      description: 'Oxygen is essential for respiration.',
      uses: 'Used in breathing, steel production, and water treatment.',
      color: 'bg-secondary'
    },
    {
      id: 9,
      symbol: 'F',
      atomicWeight: '18.998',
      electronConfig: '[He] 2s2 2p5',
      group: '17',
      period: '2',
      category: 'halogen',
      description: 'Fluorine is the most reactive element.',
      uses: 'Used in toothpaste and refrigerants.',
      color: 'bg-success'
    },
    {
      id: 10,
      symbol: 'Ne',
      atomicWeight: '20.180',
      electronConfig: '[He] 2s2 2p6',
      group: '18',
      period: '2',
      category: 'noble gas',
      description: 'Neon is a noble gas used in lighting.',
      uses: 'Used in neon signs and high-voltage indicators.',
      color: 'bg-warning'
    },

        {
          id: 1,
          symbol: 'H',
          atomicWeight: '1.008',
          electronConfig: '1s1',
          group: '1',
          period: '1',
          category: 'nonmetal',
          description: 'Hydrogen is the first element on the periodic table.',
          uses: 'Used in fuel cells, hydrogenation, and more.',
          color: 'bg-primary'
        },
        {
          id: 2,
          symbol: 'He',
          atomicWeight: '4.0026',
          electronConfig: '1s2',
          group: '18',
          period: '1',
          category: 'noble gas',
          description: 'Helium is a colorless, odorless, and inert gas.',
          uses: 'Used in balloons, cryogenics, and as a coolant.',
          color: 'bg-secondary'
        },
        {
          id: 3,
          symbol: 'Li',
          atomicWeight: '6.94',
          electronConfig: '[He] 2s1',
          group: '1',
          period: '2',
          category: 'alkali metal',
          description: 'Lithium is a soft, silvery metal.',
          uses: 'Used in batteries and mood-stabilizing drugs.',
          color: 'bg-success'
        },
        {
          id: 4,
          symbol: 'Be',
          atomicWeight: '9.0122',
          electronConfig: '[He] 2s2',
          group: '2',
          period: '2',
          category: 'alkaline earth metal',
          description: 'Beryllium is a lightweight, strong metal.',
          uses: 'Used in aerospace components and X-ray windows.',
          color: 'bg-warning'
        },
        {
          id: 5,
          symbol: 'B',
          atomicWeight: '10.81',
          electronConfig: '[He] 2s2 2p1',
          group: '13',
          period: '2',
          category: 'metalloid',
          description: 'Boron is a metalloid used in detergents and glass.',
          uses: 'Used in fiberglass, ceramics, and detergents.',
          color: 'bg-danger'
        },
        {
          id: 6,
          symbol: 'C',
          atomicWeight: '12.011',
          electronConfig: '[He] 2s2 2p2',
          group: '14',
          period: '2',
          category: 'nonmetal',
          description: 'Carbon is the basis for organic chemistry.',
          uses: 'Used in steel, diamonds, and carbon fiber.',
          color: 'bg-primary'
        },
        {
          id: 7,
          symbol: 'N',
          atomicWeight: '14.007',
          electronConfig: '[He] 2s2 2p3',
          group: '15',
          period: '2',
          category: 'nonmetal',
          description: 'Nitrogen makes up 78% of the Earth’s atmosphere.',
          uses: 'Used in fertilizers and cryogenics.',
          color: 'bg-info'
        },
        {
          id: 8,
          symbol: 'O',
          atomicWeight: '15.999',
          electronConfig: '[He] 2s2 2p4',
          group: '16',
          period: '2',
          category: 'nonmetal',
          description: 'Oxygen is essential for respiration.',
          uses: 'Used in breathing, steel production, and water treatment.',
          color: 'bg-secondary'
        },
        {
          id: 9,
          symbol: 'F',
          atomicWeight: '18.998',
          electronConfig: '[He] 2s2 2p5',
          group: '17',
          period: '2',
          category: 'halogen',
          description: 'Fluorine is the most reactive element.',
          uses: 'Used in toothpaste and refrigerants.',
          color: 'bg-success'
        },
        {
          id: 10,
          symbol: 'Ne',
          atomicWeight: '20.180',
          electronConfig: '[He] 2s2 2p6',
          group: '18',
          period: '2',
          category: 'noble gas',
          description: 'Neon is a noble gas used in lighting.',
          uses: 'Used in neon signs and high-voltage indicators.',
          color: 'bg-warning'
        },
       
            {
              id: 21,
              symbol: 'Sc',
              atomicWeight: '44.956',
              electronConfig: '[Ar] 3d1 4s2',
              group: '3',
              period: '4',
              category: 'transition metal',
              description: 'Scandium is a soft, silvery metal.',
              uses: 'Used in aerospace components and sports equipment.',
              color: 'bg-primary'
            },
            {
              id: 22,
              symbol: 'Ti',
              atomicWeight: '47.867',
              electronConfig: '[Ar] 3d2 4s2',
              group: '4',
              period: '4',
              category: 'transition metal',
              description: 'Titanium is a strong, corrosion-resistant metal.',
              uses: 'Used in aircraft, surgical implants, and pigments.',
              color: 'bg-secondary'
            },
            {
              id: 23,
              symbol: 'V',
              atomicWeight: '50.942',
              electronConfig: '[Ar] 3d3 4s2',
              group: '5',
              period: '4',
              category: 'transition metal',
              description: 'Vanadium is a hard, silvery-gray metal.',
              uses: 'Used in steel alloys and catalysts.',
              color: 'bg-success'
            },
            {
              id: 24,
              symbol: 'Cr',
              atomicWeight: '51.996',
              electronConfig: '[Ar] 3d5 4s1',
              group: '6',
              period: '4',
              category: 'transition metal',
              description: 'Chromium is a hard, lustrous metal.',
              uses: 'Used in stainless steel and chrome plating.',
              color: 'bg-warning'
            },
            {
              id: 25,
              symbol: 'Mn',
              atomicWeight: '54.938',
              electronConfig: '[Ar] 3d5 4s2',
              group: '7',
              period: '4',
              category: 'transition metal',
              description: 'Manganese is a brittle, gray metal.',
              uses: 'Used in steel production and batteries.',
              color: 'bg-danger'
            },
            {
              id: 26,
              symbol: 'Fe',
              atomicWeight: '55.845',
              electronConfig: '[Ar] 3d6 4s2',
              group: '8',
              period: '4',
              category: 'transition metal',
              description: 'Iron is a strong, magnetic metal.',
              uses: 'Used in construction, tools, and magnets.',
              color: 'bg-primary'
            },
            {
              id: 27,
              symbol: 'Co',
              atomicWeight: '58.933',
              electronConfig: '[Ar] 3d7 4s2',
              group: '9',
              period: '4',
              category: 'transition metal',
              description: 'Cobalt is a hard, blue-gray metal.',
              uses: 'Used in batteries, magnets, and pigments.',
              color: 'bg-info'
            },
            {
              id: 28,
              symbol: 'Ni',
              atomicWeight: '58.693',
              electronConfig: '[Ar] 3d8 4s2',
              group: '10',
              period: '4',
              category: 'transition metal',
              description: 'Nickel is a corrosion-resistant metal.',
              uses: 'Used in coins, batteries, and stainless steel.',
              color: 'bg-secondary'
            },
            {
              id: 29,
              symbol: 'Cu',
              atomicWeight: '63.546',
              electronConfig: '[Ar] 3d10 4s1',
              group: '11',
              period: '4',
              category: 'transition metal',
              description: 'Copper is a soft, malleable metal.',
              uses: 'Used in electrical wiring and plumbing.',
              color: 'bg-success'
            },
            {
              id: 30,
              symbol: 'Zn',
              atomicWeight: '65.38',
              electronConfig: '[Ar] 3d10 4s2',
              group: '12',
              period: '4',
              category: 'transition metal',
              description: 'Zinc is a bluish-white metal.',
              uses: 'Used in galvanizing and batteries.',
              color: 'bg-warning'
            },
           
                {
                  id: 31,
                  symbol: 'Ga',
                  atomicWeight: '69.723',
                  electronConfig: '[Ar] 3d10 4s2 4p1',
                  group: '13',
                  period: '4',
                  category: 'post-transition metal',
                  description: 'Gallium is a soft, silvery metal that melts in your hand.',
                  uses: 'Used in semiconductors and LEDs.',
                  color: 'bg-primary'
                },
                {
                  id: 32,
                  symbol: 'Ge',
                  atomicWeight: '72.630',
                  electronConfig: '[Ar] 3d10 4s2 4p2',
                  group: '14',
                  period: '4',
                  category: 'metalloid',
                  description: 'Germanium is a brittle, gray-white metalloid.',
                  uses: 'Used in semiconductors and fiber optics.',
                  color: 'bg-secondary'
                },
                {
                  id: 33,
                  symbol: 'As',
                  atomicWeight: '74.922',
                  electronConfig: '[Ar] 3d10 4s2 4p3',
                  group: '15',
                  period: '4',
                  category: 'metalloid',
                  description: 'Arsenic is a toxic, semi-metallic element.',
                  uses: 'Used in pesticides and semiconductors.',
                  color: 'bg-success'
                },
                {
                  id: 34,
                  symbol: 'Se',
                  atomicWeight: '78.971',
                  electronConfig: '[Ar] 3d10 4s2 4p4',
                  group: '16',
                  period: '4',
                  category: 'nonmetal',
                  description: 'Selenium is a gray, semi-conducting element.',
                  uses: 'Used in photocopiers and glass production.',
                  color: 'bg-warning'
                },
                {
                  id: 35,
                  symbol: 'Br',
                  atomicWeight: '79.904',
                  electronConfig: '[Ar] 3d10 4s2 4p5',
                  group: '17',
                  period: '4',
                  category: 'halogen',
                  description: 'Bromine is a reddish-brown liquid at room temperature.',
                  uses: 'Used in flame retardants and water treatment.',
                  color: 'bg-danger'
                },
                {
                  id: 36,
                  symbol: 'Kr',
                  atomicWeight: '83.798',
                  electronConfig: '[Ar] 3d10 4s2 4p6',
                  group: '18',
                  period: '4',
                  category: 'noble gas',
                  description: 'Krypton is a colorless, inert gas.',
                  uses: 'Used in lighting and photography.',
                  color: 'bg-primary'
                },
                {
                  id: 37,
                  symbol: 'Rb',
                  atomicWeight: '85.468',
                  electronConfig: '[Kr] 5s1',
                  group: '1',
                  period: '5',
                  category: 'alkali metal',
                  description: 'Rubidium is a soft, reactive metal.',
                  uses: 'Used in atomic clocks and research.',
                  color: 'bg-info'
                },
                {
                  id: 38,
                  symbol: 'Sr',
                  atomicWeight: '87.62',
                  electronConfig: '[Kr] 5s2',
                  group: '2',
                  period: '5',
                  category: 'alkaline earth metal',
                  description: 'Strontium is a soft, silvery metal.',
                  uses: 'Used in fireworks and medical imaging.',
                  color: 'bg-secondary'
                },
                {
                  id: 39,
                  symbol: 'Y',
                  atomicWeight: '88.906',
                  electronConfig: '[Kr] 4d1 5s2',
                  group: '3',
                  period: '5',
                  category: 'transition metal',
                  description: 'Yttrium is a soft, silver-metallic element.',
                  uses: 'Used in LEDs and superconductors.',
                  color: 'bg-success'
                },
                {
                  id: 40,
                  symbol: 'Zr',
                  atomicWeight: '91.224',
                  electronConfig: '[Kr] 4d2 5s2',
                  group: '4',
                  period: '5',
                  category: 'transition metal',
                  description: 'Zirconium is a strong, corrosion-resistant metal.',
                  uses: 'Used in nuclear reactors and surgical instruments.',
                  color: 'bg-warning'
                },
            
                    {
                      id: 41,
                      symbol: 'Nb',
                      atomicWeight: '92.906',
                      electronConfig: '[Kr] 4d4 5s1',
                      group: '5',
                      period: '5',
                      category: 'transition metal',
                      description: 'Niobium is a soft, ductile metal.',
                      uses: 'Used in superconducting magnets and alloys.',
                      color: 'bg-primary'
                    },
                    {
                      id: 42,
                      symbol: 'Mo',
                      atomicWeight: '95.95',
                      electronConfig: '[Kr] 4d5 5s1',
                      group: '6',
                      period: '5',
                      category: 'transition metal',
                      description: 'Molybdenum is a hard, silvery metal.',
                      uses: 'Used in steel alloys and lubrication.',
                      color: 'bg-secondary'
                    },
                    {
                      id: 43,
                      symbol: 'Tc',
                      atomicWeight: '(98)',
                      electronConfig: '[Kr] 4d5 5s2',
                      group: '7',
                      period: '5',
                      category: 'transition metal',
                      description: 'Technetium is a radioactive metal.',
                      uses: 'Used in medical imaging and research.',
                      color: 'bg-success'
                    },
                    {
                      id: 44,
                      symbol: 'Ru',
                      atomicWeight: '101.07',
                      electronConfig: '[Kr] 4d7 5s1',
                      group: '8',
                      period: '5',
                      category: 'transition metal',
                      description: 'Ruthenium is a rare, hard metal.',
                      uses: 'Used in electronics and catalysts.',
                      color: 'bg-warning'
                    },
                    {
                      id: 45,
                      symbol: 'Rh',
                      atomicWeight: '102.91',
                      electronConfig: '[Kr] 4d8 5s1',
                      group: '9',
                      period: '5',
                      category: 'transition metal',
                      description: 'Rhodium is a rare, silver-white metal.',
                      uses: 'Used in jewelry and catalytic converters.',
                      color: 'bg-danger'
                    },
                    {
                      id: 46,
                      symbol: 'Pd',
                      atomicWeight: '106.42',
                      electronConfig: '[Kr] 4d10',
                      group: '10',
                      period: '5',
                      category: 'transition metal',
                      description: 'Palladium is a rare, lustrous metal.',
                      uses: 'Used in jewelry and fuel cells.',
                      color: 'bg-primary'
                    },
                    {
                      id: 47,
                      symbol: 'Ag',
                      atomicWeight: '107.87',
                      electronConfig: '[Kr] 4d10 5s1',
                      group: '11',
                      period: '5',
                      category: 'transition metal',
                      description: 'Silver is a soft, white metal.',
                      uses: 'Used in jewelry, coins, and electronics.',
                      color: 'bg-info'
                    },
                    {
                      id: 48,
                      symbol: 'Cd',
                      atomicWeight: '112.41',
                      electronConfig: '[Kr] 4d10 5s2',
                      group: '12',
                      period: '5',
                      category: 'transition metal',
                      description: 'Cadmium is a soft, bluish-white metal.',
                      uses: 'Used in batteries and pigments.',
                      color: 'bg-secondary'
                    },
                    {
                      id: 49,
                      symbol: 'In',
                      atomicWeight: '114.82',
                      electronConfig: '[Kr] 4d10 5s2 5p1',
                      group: '13',
                      period: '5',
                      category: 'post-transition metal',
                      description: 'Indium is a soft, silvery metal.',
                      uses: 'Used in touchscreens and semiconductors.',
                      color: 'bg-success'
                    },
                    {
                      id: 50,
                      symbol: 'Sn',
                      atomicWeight: '118.71',
                      electronConfig: '[Kr] 4d10 5s2 5p2',
                      group: '14',
                      period: '5',
                      category: 'post-transition metal',
                      description: 'Tin is a soft, malleable metal.',
                      uses: 'Used in soldering and alloys.',
                      color: 'bg-warning'
                    },
                  
                        {
                          id: 51,
                          symbol: 'Sb',
                          atomicWeight: '121.76',
                          electronConfig: '[Kr] 4d10 5s2 5p3',
                          group: '15',
                          period: '5',
                          category: 'metalloid',
                          description: 'Antimony is a brittle, lustrous metalloid.',
                          uses: 'Used in flame retardants and batteries.',
                          color: 'bg-primary'
                        },
                        {
                          id: 52,
                          symbol: 'Te',
                          atomicWeight: '127.60',
                          electronConfig: '[Kr] 4d10 5s2 5p4',
                          group: '16',
                          period: '5',
                          category: 'metalloid',
                          description: 'Tellurium is a brittle, silver-white metalloid.',
                          uses: 'Used in alloys and semiconductors.',
                          color: 'bg-secondary'
                        },
                        {
                          id: 53,
                          symbol: 'I',
                          atomicWeight: '126.90',
                          electronConfig: '[Kr] 4d10 5s2 5p5',
                          group: '17',
                          period: '5',
                          category: 'halogen',
                          description: 'Iodine is a purple-black solid.',
                          uses: 'Used in medicine and photography.',
                          color: 'bg-success'
                        },
                        {
                          id: 54,
                          symbol: 'Xe',
                          atomicWeight: '131.29',
                          electronConfig: '[Kr] 4d10 5s2 5p6',
                          group: '18',
                          period: '5',
                          category: 'noble gas',
                          description: 'Xenon is a colorless, odorless gas.',
                          uses: 'Used in lighting and medical imaging.',
                          color: 'bg-warning'
                        },
                        {
                          id: 55,
                          symbol: 'Cs',
                          atomicWeight: '132.91',
                          electronConfig: '[Xe] 6s1',
                          group: '1',
                          period: '6',
                          category: 'alkali metal',
                          description: 'Cesium is a soft, golden metal.',
                          uses: 'Used in atomic clocks and electronics.',
                          color: 'bg-danger'
                        },
                        {
                          id: 56,
                          symbol: 'Ba',
                          atomicWeight: '137.33',
                          electronConfig: '[Xe] 6s2',
                          group: '2',
                          period: '6',
                          category: 'alkaline earth metal',
                          description: 'Barium is a soft, silvery metal.',
                          uses: 'Used in drilling fluids and X-ray imaging.',
                          color: 'bg-primary'
                        },
                        {
                          id: 57,
                          symbol: 'La',
                          atomicWeight: '138.91',
                          electronConfig: '[Xe] 5d1 6s2',
                          group: '3',
                          period: '6',
                          category: 'lanthanide',
                          description: 'Lanthanum is a soft, malleable metal.',
                          uses: 'Used in optical lenses and catalysts.',
                          color: 'bg-info'
                        },
                        {
                          id: 58,
                          symbol: 'Ce',
                          atomicWeight: '140.12',
                          electronConfig: '[Xe] 4f1 5d1 6s2',
                          group: 'n/a',
                          period: '6',
                          category: 'lanthanide',
                          description: 'Cerium is a soft, silvery metal.',
                          uses: 'Used in self-cleaning ovens and alloys.',
                          color: 'bg-secondary'
                        },
                        {
                          id: 59,
                          symbol: 'Pr',
                          atomicWeight: '140.91',
                          electronConfig: '[Xe] 4f3 6s2',
                          group: 'n/a',
                          period: '6',
                          category: 'lanthanide',
                          description: 'Praseodymium is a soft, silvery metal.',
                          uses: 'Used in aircraft engines and magnets.',
                          color: 'bg-success'
                        },
                        {
                          id: 60,
                          symbol: 'Nd',
                          atomicWeight: '144.24',
                          electronConfig: '[Xe] 4f4 6s2',
                          group: 'n/a',
                          period: '6',
                          category: 'lanthanide',
                          description: 'Neodymium is a soft, silvery metal.',
                          uses: 'Used in magnets and lasers.',
                          color: 'bg-warning'
                        },
                  
                            {
                              id: 61,
                              symbol: 'Pm',
                              atomicWeight: '(145)',
                              electronConfig: '[Xe] 4f5 6s2',
                              group: 'n/a',
                              period: '6',
                              category: 'lanthanide',
                              description: 'Promethium is a radioactive metal.',
                              uses: 'Used in luminous paint and nuclear batteries.',
                              color: 'bg-primary'
                            },
                            {
                              id: 62,
                              symbol: 'Sm',
                              atomicWeight: '150.36',
                              electronConfig: '[Xe] 4f6 6s2',
                              group: 'n/a',
                              period: '6',
                              category: 'lanthanide',
                              description: 'Samarium is a hard, silvery metal.',
                              uses: 'Used in magnets and nuclear reactors.',
                              color: 'bg-secondary'
                            },
                            {
                              id: 63,
                              symbol: 'Eu',
                              atomicWeight: '151.96',
                              electronConfig: '[Xe] 4f7 6s2',
                              group: 'n/a',
                              period: '6',
                              category: 'lanthanide',
                              description: 'Europium is a soft, silvery metal.',
                              uses: 'Used in phosphorescent paint and TV screens.',
                              color: 'bg-success'
                            },
                            {
                              id: 64,
                              symbol: 'Gd',
                              atomicWeight: '157.25',
                              electronConfig: '[Xe] 4f7 5d1 6s2',
                              group: 'n/a',
                              period: '6',
                              category: 'lanthanide',
                              description: 'Gadolinium is a silvery-white metal.',
                              uses: 'Used in MRI contrast agents and alloys.',
                              color: 'bg-warning'
                            },
                            {
                              id: 65,
                              symbol: 'Tb',
                              atomicWeight: '158.93',
                              electronConfig: '[Xe] 4f9 6s2',
                              group: 'n/a',
                              period: '6',
                              category: 'lanthanide',
                              description: 'Terbium is a soft, silvery metal.',
                              uses: 'Used in green phosphors and electronics.',
                              color: 'bg-danger'
                            },
                            {
                              id: 66,
                              symbol: 'Dy',
                              atomicWeight: '162.50',
                              electronConfig: '[Xe] 4f10 6s2',
                              group: 'n/a',
                              period: '6',
                              category: 'lanthanide',
                              description: 'Dysprosium is a soft, silvery metal.',
                              uses: 'Used in nuclear reactors and magnets.',
                              color: 'bg-primary'
                            },
                            {
                              id: 67,
                              symbol: 'Ho',
                              atomicWeight: '164.93',
                              electronConfig: '[Xe] 4f11 6s2',
                              group: 'n/a',
                              period: '6',
                              category: 'lanthanide',
                              description: 'Holmium is a soft, silvery metal.',
                              uses: 'Used in lasers and nuclear reactors.',
                              color: 'bg-info'
                            },
                            {
                              id: 68,
                              symbol: 'Er',
                              atomicWeight: '167.26',
                              electronConfig: '[Xe] 4f12 6s2',
                              group: 'n/a',
                              period: '6',
                              category: 'lanthanide',
                              description: 'Erbium is a soft, silvery metal.',
                              uses: 'Used in fiber optics and lasers.',
                              color: 'bg-secondary'
                            },
                            {
                              id: 69,
                              symbol: 'Tm',
                              atomicWeight: '168.93',
                              electronConfig: '[Xe] 4f13 6s2',
                              group: 'n/a',
                              period: '6',
                              category: 'lanthanide',
                              description: 'Thulium is a soft, silvery metal.',
                              uses: 'Used in lasers and portable X-ray machines.',
                              color: 'bg-success'
                            },
                            {
                              id: 70,
                              symbol: 'Yb',
                              atomicWeight: '173.05',
                              electronConfig: '[Xe] 4f14 6s2',
                              group: 'n/a',
                              period: '6',
                              category: 'lanthanide',
                              description: 'Ytterbium is a soft, silvery metal.',
                              uses: 'Used in stainless steel and lasers.',
                              color: 'bg-warning'
                            },
                          {
                                  id: 71,
                                  symbol: 'Lu',
                                  atomicWeight: '174.97',
                                  electronConfig: '[Xe] 4f14 5d1 6s2',
                                  group: '3',
                                  period: '6',
                                  category: 'lanthanide',
                                  description: 'Lutetium is a hard, silvery metal.',
                                  uses: 'Used in PET scanners and catalysts.',
                                  color: 'bg-primary'
                                },
                                {
                                  id: 72,
                                  symbol: 'Hf',
                                  atomicWeight: '178.49',
                                  electronConfig: '[Xe] 4f14 5d2 6s2',
                                  group: '4',
                                  period: '6',
                                  category: 'transition metal',
                                  description: 'Hafnium is a shiny, corrosion-resistant metal.',
                                  uses: 'Used in nuclear reactors and plasma cutting.',
                                  color: 'bg-secondary'
                                },
                                {
                                  id: 73,
                                  symbol: 'Ta',
                                  atomicWeight: '180.95',
                                  electronConfig: '[Xe] 4f14 5d3 6s2',
                                  group: '5',
                                  period: '6',
                                  category: 'transition metal',
                                  description: 'Tantalum is a hard, blue-gray metal.',
                                  uses: 'Used in electronics and surgical implants.',
                                  color: 'bg-success'
                                },
                                {
                                  id: 74,
                                  symbol: 'W',
                                  atomicWeight: '183.84',
                                  electronConfig: '[Xe] 4f14 5d4 6s2',
                                  group: '6',
                                  period: '6',
                                  category: 'transition metal',
                                  description: 'Tungsten is a dense, tough metal with a high melting point.',
                                  uses: 'Used in light bulbs and cutting tools.',
                                  color: 'bg-warning'
                                },
                                {
                                  id: 75,
                                  symbol: 'Re',
                                  atomicWeight: '186.21',
                                  electronConfig: '[Xe] 4f14 5d5 6s2',
                                  group: '7',
                                  period: '6',
                                  category: 'transition metal',
                                  description: 'Rhenium is a dense, silver-gray metal.',
                                  uses: 'Used in jet engines and electrical contacts.',
                                  color: 'bg-danger'
                                },
                                {
                                  id: 76,
                                  symbol: 'Os',
                                  atomicWeight: '190.23',
                                  electronConfig: '[Xe] 4f14 5d6 6s2',
                                  group: '8',
                                  period: '6',
                                  category: 'transition metal',
                                  description: 'Osmium is a hard, brittle, blue-white metal.',
                                  uses: 'Used in fountain pen tips and electrical contacts.',
                                  color: 'bg-primary'
                                },
                                {
                                  id: 77,
                                  symbol: 'Ir',
                                  atomicWeight: '192.22',
                                  electronConfig: '[Xe] 4f14 5d7 6s2',
                                  group: '9',
                                  period: '6',
                                  category: 'transition metal',
                                  description: 'Iridium is a dense, corrosion-resistant metal.',
                                  uses: 'Used in spark plugs and medical implants.',
                                  color: 'bg-info'
                                },
                                {
                                  id: 78,
                                  symbol: 'Pt',
                                  atomicWeight: '195.08',
                                  electronConfig: '[Xe] 4f14 5d9 6s1',
                                  group: '10',
                                  period: '6',
                                  category: 'transition metal',
                                  description: 'Platinum is a dense, malleable, and precious metal.',
                                  uses: 'Used in jewelry and catalytic converters.',
                                  color: 'bg-secondary'
                                },
                                {
                                  id: 79,
                                  symbol: 'Au',
                                  atomicWeight: '196.97',
                                  electronConfig: '[Xe] 4f14 5d10 6s1',
                                  group: '11',
                                  period: '6',
                                  category: 'transition metal',
                                  description: 'Gold is a soft, yellow, precious metal.',
                                  uses: 'Used in jewelry and electronics.',
                                  color: 'bg-success'
                                },
                                {
                                  id: 80,
                                  symbol: 'Hg',
                                  atomicWeight: '200.59',
                                  electronConfig: '[Xe] 4f14 5d10 6s2',
                                  group: '12',
                                  period: '6',
                                  category: 'transition metal',
                                  description: 'Mercury is a liquid metal at room temperature.',
                                  uses: 'Used in thermometers and barometers.',
                                  color: 'bg-warning'
                                }
                              ,
                            
                                {
                                  id: 81,
                                  symbol: 'Tl',
                                  atomicWeight: '204.38',
                                  electronConfig: '[Xe] 4f14 5d10 6s2 6p1',
                                  group: '13',
                                  period: '6',
                                  category: 'post-transition metal',
                                  description: 'Thallium is a soft, gray metal.',
                                  uses: 'Used in electronics and glass manufacturing.',
                                  color: 'bg-primary'
                                },
                                {
                                  id: 82,
                                  symbol: 'Pb',
                                  atomicWeight: '207.2',
                                  electronConfig: '[Xe] 4f14 5d10 6s2 6p2',
                                  group: '14',
                                  period: '6',
                                  category: 'post-transition metal',
                                  description: 'Lead is a soft, heavy metal.',
                                  uses: 'Used in batteries and radiation shielding.',
                                  color: 'bg-secondary'
                                },
                                {
                                  id: 83,
                                  symbol: 'Bi',
                                  atomicWeight: '208.98',
                                  electronConfig: '[Xe] 4f14 5d10 6s2 6p3',
                                  group: '15',
                                  period: '6',
                                  category: 'post-transition metal',
                                  description: 'Bismuth is a brittle, pinkish-white metal.',
                                  uses: 'Used in pharmaceuticals and cosmetics.',
                                  color: 'bg-success'
                                },
                                {
                                  id: 84,
                                  symbol: 'Po',
                                  atomicWeight: '(209)',
                                  electronConfig: '[Xe] 4f14 5d10 6s2 6p4',
                                  group: '16',
                                  period: '6',
                                  category: 'metalloid',
                                  description: 'Polonium is a rare, highly radioactive element.',
                                  uses: 'Used in antistatic devices and research.',
                                  color: 'bg-warning'
                                },
                                {
                                  id: 85,
                                  symbol: 'At',
                                  atomicWeight: '(210)',
                                  electronConfig: '[Xe] 4f14 5d10 6s2 6p5',
                                  group: '17',
                                  period: '6',
                                  category: 'halogen',
                                  description: 'Astatine is a rare, radioactive halogen.',
                                  uses: 'Used in cancer treatment research.',
                                  color: 'bg-danger'
                                },
                                {
                                  id: 86,
                                  symbol: 'Rn',
                                  atomicWeight: '(222)',
                                  electronConfig: '[Xe] 4f14 5d10 6s2 6p6',
                                  group: '18',
                                  period: '6',
                                  category: 'noble gas',
                                  description: 'Radon is a radioactive, colorless gas.',
                                  uses: 'Used in cancer treatment research.',
                                  color: 'bg-primary'
                                },
                                {
                                  id: 87,
                                  symbol: 'Fr',
                                  atomicWeight: '(223)',
                                  electronConfig: '[Rn] 7s1',
                                  group: '1',
                                  period: '7',
                                  category: 'alkali metal',
                                  description: 'Francium is a highly radioactive metal.',
                                  uses: 'Used in scientific research.',
                                  color: 'bg-info'
                                },
                                {
                                  id: 88,
                                  symbol: 'Ra',
                                  atomicWeight: '(226)',
                                  electronConfig: '[Rn] 7s2',
                                  group: '2',
                                  period: '7',
                                  category: 'alkaline earth metal',
                                  description: 'Radium is a radioactive, silvery metal.',
                                  uses: 'Used in cancer treatment research.',
                                  color: 'bg-secondary'
                                },
                                {
                                  id: 89,
                                  symbol: 'Ac',
                                  atomicWeight: '(227)',
                                  electronConfig: '[Rn] 6d1 7s2',
                                  group: '3',
                                  period: '7',
                                  category: 'actinide',
                                  description: 'Actinium is a soft, radioactive metal.',
                                  uses: 'Used in radiation therapy.',
                                  color: 'bg-success'
                                },
                                {
                                  id: 90,
                                  symbol: 'Th',
                                  atomicWeight: '232.04',
                                  electronConfig: '[Rn] 6d2 7s2',
                                  group: 'n/a',
                                  period: '7',
                                  category: 'actinide',
                                  description: 'Thorium is a dense, radioactive metal.',
                                  uses: 'Used in nuclear reactors and gas mantles.',
                                  color: 'bg-warning'
                                },
                             
                                    {
                                      id: 91,
                                      symbol: 'Pa',
                                      atomicWeight: '231.04',
                                      electronConfig: '[Rn] 5f2 6d1 7s2',
                                      group: 'n/a',
                                      period: '7',
                                      category: 'actinide',
                                      description: 'Protactinium is a dense, radioactive metal.',
                                      uses: 'Used in scientific research.',
                                      color: 'bg-primary'
                                    },
                                    {
                                      id: 92,
                                      symbol: 'U',
                                      atomicWeight: '238.03',
                                      electronConfig: '[Rn] 5f3 6d1 7s2',
                                      group: 'n/a',
                                      period: '7',
                                      category: 'actinide',
                                      description: 'Uranium is a heavy, radioactive metal.',
                                      uses: 'Used in nuclear reactors and weapons.',
                                      color: 'bg-secondary'
                                    },
                                    {
                                      id: 93,
                                      symbol: 'Np',
                                      atomicWeight: '(237)',
                                      electronConfig: '[Rn] 5f4 6d1 7s2',
                                      group: 'n/a',
                                      period: '7',
                                      category: 'actinide',
                                      description: 'Neptunium is a radioactive, silvery metal.',
                                      uses: 'Used in nuclear research.',
                                      color: 'bg-success'
                                    },
                                    {
                                      id: 94,
                                      symbol: 'Pu',
                                      atomicWeight: '(244)',
                                      electronConfig: '[Rn] 5f6 7s2',
                                      group: 'n/a',
                                      period: '7',
                                      category: 'actinide',
                                      description: 'Plutonium is a radioactive, silvery metal.',
                                      uses: 'Used in nuclear weapons and reactors.',
                                      color: 'bg-warning'
                                    },
                                    {
                                      id: 95,
                                      symbol: 'Am',
                                      atomicWeight: '(243)',
                                      electronConfig: '[Rn] 5f7 7s2',
                                      group: 'n/a',
                                      period: '7',
                                      category: 'actinide',
                                      description: 'Americium is a synthetic, radioactive metal.',
                                      uses: 'Used in smoke detectors and research.',
                                      color: 'bg-danger'
                                    },
                                    {
                                      id: 96,
                                      symbol: 'Cm',
                                      atomicWeight: '(247)',
                                      electronConfig: '[Rn] 5f7 6d1 7s2',
                                      group: 'n/a',
                                      period: '7',
                                      category: 'actinide',
                                      description: 'Curium is a hard, dense, radioactive metal.',
                                      uses: 'Used in spacecraft power sources.',
                                      color: 'bg-primary'
                                    },
                                    {
                                      id: 97,
                                      symbol: 'Bk',
                                      atomicWeight: '(247)',
                                      electronConfig: '[Rn] 5f9 7s2',
                                      group: 'n/a',
                                      period: '7',
                                      category: 'actinide',
                                      description: 'Berkelium is a synthetic, radioactive metal.',
                                      uses: 'Used in scientific research.',
                                      color: 'bg-info'
                                    },
                                    {
                                      id: 98,
                                      symbol: 'Cf',
                                      atomicWeight: '(251)',
                                      electronConfig: '[Rn] 5f10 7s2',
                                      group: 'n/a',
                                      period: '7',
                                      category: 'actinide',
                                      description: 'Californium is a synthetic, radioactive metal.',
                                      uses: 'Used in nuclear reactors and cancer treatment.',
                                      color: 'bg-secondary'
                                    },
                                    {
                                      id: 99,
                                      symbol: 'Es',
                                      atomicWeight: '(252)',
                                      electronConfig: '[Rn] 5f11 7s2',
                                      group: 'n/a',
                                      period: '7',
                                      category: 'actinide',
                                      description: 'Einsteinium is a synthetic, radioactive metal.',
                                      uses: 'Used in scientific research.',
                                      color: 'bg-success'
                                    },
                                    {
                                      id: 100,
                                      symbol: 'Fm',
                                      atomicWeight: '(257)',
                                      electronConfig: '[Rn] 5f12 7s2',
                                      group: 'n/a',
                                      period: '7',
                                      category: 'actinide',
                                      description: 'Fermium is a synthetic, radioactive metal.',
                                      uses: 'Used in scientific research.',
                                      color: 'bg-warning'
                                    },
                                    {
                                      id: 101,
                                      symbol: 'Md',
                                      atomicWeight: '(258)',
                                      electronConfig: '[Rn] 5f13 7s2',
                                      group: 'n/a',
                                      period: '7',
                                      category: 'actinide',
                                      description: 'Mendelevium is a synthetic, radioactive metal.',
                                      uses: 'Used in scientific research.',
                                      color: 'bg-danger'
                                    },
                                    {
                                      id: 102,
                                      symbol: 'No',
                                      atomicWeight: '(259)',
                                      electronConfig: '[Rn] 5f14 7s2',
                                      group: 'n/a',
                                      period: '7',
                                      category: 'actinide',
                                      description: 'Nobelium is a synthetic, radioactive metal.',
                                      uses: 'Used in scientific research.',
                                      color: 'bg-primary'
                                    },
                                    {
                                      id: 103,
                                      symbol: 'Lr',
                                      atomicWeight: '(262)',
                                      electronConfig: '[Rn] 5f14 7s2 7p1',
                                      group: 'n/a',
                                      period: '7',
                                      category: 'actinide',
                                      description: 'Lawrencium is a synthetic, radioactive metal.',
                                      uses: 'Used in scientific research.',
                                      color: 'bg-secondary'
                                    },
                                    {
                                      id: 104,
                                      symbol: 'Rf',
                                      atomicWeight: '(267)',
                                      electronConfig: '[Rn] 5f14 6d2 7s2',
                                      group: '4',
                                      period: '7',
                                      category: 'transition metal',
                                      description: 'Rutherfordium is a synthetic, radioactive metal.',
                                      uses: 'Used in scientific research.',
                                      color: 'bg-success'
                                    },
                                    {
                                      id: 105,
                                      symbol: 'Db',
                                      atomicWeight: '(270)',
                                      electronConfig: '[Rn] 5f14 6d3 7s2',
                                      group: '5',
                                      period: '7',
                                      category: 'transition metal',
                                      description: 'Dubnium is a synthetic, radioactive metal.',
                                      uses: 'Used in scientific research.',
                                      color: 'bg-warning'
                                    },
                                    {
                                      id: 106,
                                      symbol: 'Sg',
                                      atomicWeight: '(271)',
                                      electronConfig: '[Rn] 5f14 6d4 7s2',
                                      group: '6',
                                      period: '7',
                                      category: 'transition metal',
                                      description: 'Seaborgium is a synthetic, radioactive metal.',
                                      uses: 'Used in scientific research.',
                                      color: 'bg-danger'
                                    },
                                    {
                                      id: 107,
                                      symbol: 'Bh',
                                      atomicWeight: '(270)',
                                      electronConfig: '[Rn] 5f14 6d5 7s2',
                                      group: '7',
                                      period: '7',
                                      category: 'transition metal',
                                      description: 'Bohrium is a synthetic, radioactive metal.',
                                      uses: 'Used in scientific research.',
                                      color: 'bg-primary'
                                    },
                                    {
                                      id: 108,
                                      symbol: 'Hs',
                                      atomicWeight: '(277)',
                                      electronConfig: '[Rn] 5f14 6d6 7s2',
                                      group: '8',
                                      period: '7',
                                      category: 'transition metal',
                                      description: 'Hassium is a synthetic, radioactive metal.',
                                      uses: 'Used in scientific research.',
                                      color: 'bg-secondary'
                                    }

  ];

 
  function App() {
    // State for selected element
    const [selectedElement, setSelectedElement] = useState(null);
    // State for search query
    const [searchQuery, setSearchQuery] = useState('');
    // State for filtered elements
    const [filteredElements, setFilteredElements] = useState([]);
    // State for category filter
    const [categoryFilter, setCategoryFilter] = useState('all');
    // State for dark mode
    const [darkMode, setDarkMode] = useState(false);
    // State for loading
    const [loading, setLoading] = useState(true);
    // State for offcanvas
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    // State for bookmark
    const [bookmarks, setBookmarks] = useState([]);
    // State for quiz mode
    const [quizMode, setQuizMode] = useState(false);
    // State for quiz question
    const [quizQuestion, setQuizQuestion] = useState(null);
    // State for quiz answer
    const [quizAnswer, setQuizAnswer] = useState('');
    // State for quiz score
    const [quizScore, setQuizScore] = useState(0);
    // State for quiz total questions answered
    const [quizTotal, setQuizTotal] = useState(0);
    
    // Elements data - add more element objects as needed.
    
  
    // Element categories and colors
    const categories = {
      all: { name: 'All Elements', color: 'bg-dark' },
      nonmetal: { name: 'Nonmetals', color: 'bg-primary' },
      'noble-gas': { name: 'Noble Gases', color: 'bg-warning' },
      'alkali-metal': { name: 'Alkali Metals', color: 'bg-danger' },
      'alkaline-earth': { name: 'Alkaline Earth Metals', color: 'bg-success' },
      metalloid: { name: 'Metalloids', color: 'bg-info' },
      'post-transition': { name: 'Post-Transition Metals', color: 'bg-secondary' },
      halogen: { name: 'Halogens', color: 'bg-secondary' }
    };
  
    // Generate a random quiz question
    const generateQuizQuestion = () => {
      const questionTypes = ['symbol', 'name', 'atomicWeight', 'category'];
      const randomElement = elements[Math.floor(Math.random() * elements.length)];
      const randomQuestionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
  
      let question = '';
      let correctAnswer = '';
  
      switch (randomQuestionType) {
        case 'symbol':
          question = `What is the symbol for ${randomElement.name}?`;
          correctAnswer = randomElement.symbol;
          break;
        case 'name':
          question = `What element has the symbol ${randomElement.symbol}?`;
          correctAnswer = randomElement.name;
          break;
        case 'atomicWeight':
          question = `What is the atomic weight of ${randomElement.name}?`;
          correctAnswer = randomElement.atomicWeight;
          break;
        case 'category':
          question = `What category does ${randomElement.name} belong to?`;
          correctAnswer = randomElement.category;
          break;
        default:
          question = `What is the symbol for ${randomElement.name}?`;
          correctAnswer = randomElement.symbol;
      }
  
      return { question, correctAnswer, element: randomElement };
    };
  
    // Check the quiz answer
    const checkQuizAnswer = () => {
      if (!quizQuestion) return;
  
      const isCorrect =
        quizAnswer.toLowerCase() === quizQuestion.correctAnswer.toLowerCase();
  
      if (isCorrect) {
        setQuizScore(quizScore + 1);
      }
  
      // Show result via a bootstrap modal (ensure you create a modal with id "quizResultModal" if needed)
      const modal = new window.bootstrap.Modal(
        document.getElementById('quizResultModal')
      );
      modal.show();
  
      // Set new question and update total
      setQuizTotal(quizTotal + 1);
      setQuizQuestion(generateQuizQuestion());
      setQuizAnswer('');
    };
  
    // Filter elements based on search and category
    useEffect(() => {
      let filtered = elements;
  
      if (searchQuery) {
        filtered = filtered.filter(
          (element) =>
            element.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            element.symbol.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
  
      if (categoryFilter !== 'all') {
        filtered = filtered.filter(
          (element) => element.category === categoryFilter
        );
      }
  
      setFilteredElements(filtered);
    }, [searchQuery, categoryFilter]);
  
    // Simulate loading
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setFilteredElements(elements);
    }, []);
  
    // Add bookmark
    const addBookmark = (element) => {
      if (!bookmarks.some((b) => b.id === element.id)) {
        setBookmarks([...bookmarks, element]);
  
        // Show toast
        const toastElement = document.getElementById('bookmarkToast');
        const toast = new bootstrap.Toast(toastElement);
  toast.show();
  
      }
    };
  
    // Remove bookmark
    const removeBookmark = (elementId) => {
      setBookmarks(bookmarks.filter((b) => b.id !== elementId));
    };
  
    // Start quiz
    const startQuiz = () => {
      setQuizMode(true);
      setQuizScore(0);
      setQuizTotal(0);
      setQuizQuestion(generateQuizQuestion());
    };
  
    // End quiz
    const endQuiz = () => {
      setQuizMode(false);
      setQuizQuestion(null);
    };
  
    return (
      <div className={darkMode ? 'bg-dark text-light' : 'bg-light'}>
        {/* Navigation Bar */}
        <nav
          className={`navbar navbar-expand-lg sticky-top ${
            darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
          } shadow-sm`}
        >
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <i className="bi bi-hexagon-fill me-2 text-primary"></i>
              <span>Elemnt Gallery</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#elements">
                    Elements
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => setShowOffcanvas(true)}
                  >
                    Bookmarks{' '}
                    <span className="badge bg-primary">{bookmarks.length}</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#quizModal"
                  >
                    Quiz
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Info
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#aboutModal"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#helpModal"
                      >
                        Help
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#contactModal"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="d-flex">
                <div className="form-check form-switch me-3 mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="darkModeSwitch"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  <label className="form-check-label" htmlFor="darkModeSwitch">
                    Dark Mode
                  </label>
                </div>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search elements"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn btn-outline-primary" type="button">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
  
        {/* Loading Spinner */}
        {loading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: '80vh' }}
          >
            <div
              className="spinner-border text-primary"
              role="status"
              style={{ width: '3rem', height: '3rem' }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
  
        {!loading && (
          <>
            {/* Hero Section */}
            <section
              id="home"
              className={`py-5 text-center ${
                darkMode ? 'bg-dark text-light' : 'bg-light'
              }`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h1 className="display-4">Explore the Elements</h1>
                    <p className="lead mb-4">
                      Interactive guide to the periodic table with detailed
                      chemical properties and information.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                      <a
                        href="#elements"
                        className="btn btn-primary btn-lg px-4 gap-3"
                      >
                        View Elements
                      </a>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg px-4"
                        data-bs-toggle="modal"
                        data-bs-target="#infoModal"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
            {/* Category Filter */}
            <section
              className={`py-3 ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h4>Filter by Category:</h4>
                    <div className="d-flex flex-wrap">
                      {Object.keys(categories).map((cat) => (
                        <button
                          key={cat}
                          className={`btn m-1 ${
                            categoryFilter === cat
                              ? 'btn-primary'
                              : `btn-outline-${
                                  cat === 'all' ? 'primary' : 'secondary'
                                }`
                          }`}
                          onClick={() => setCategoryFilter(cat)}
                        >
                          <span
                            className={`badge ${categories[cat].color} me-1`}
                          >
                            &nbsp;
                          </span>
                          {categories[cat].name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
            {/* Elements Grid */}
            <section
              id="elements"
              className={`py-5 ${
                darkMode ? 'bg-dark text-light' : 'bg-secondary bg-opacity-10'
              }`}
            >
              <div className="container">
                <h2 className="text-center mb-4">Periodic Table</h2>
                {/* Show alert if no elements match filter */}
                {filteredElements.length === 0 && (
                  <div className="alert alert-info" role="alert">
                    No elements match your search criteria. Try adjusting your
                    search or filters.
                  </div>
                )}
                <div className="row g-3">
                  {filteredElements.map((element) => (
                    <div key={element.id} className="col-md-3 col-sm-6">
                      <div
                        className={`card h-100 ${element.color} bg-opacity-25 element-card ${
                          darkMode ? 'text-light border-secondary' : ''
                        }`}
                        onClick={() => setSelectedElement(element)}
                        data-bs-toggle="modal"
                        data-bs-target="#elementModal"
                      >
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <h5 className="card-title">{element.symbol}</h5>
                            <span className="badge bg-secondary">
                              {element.id}
                            </span>
                          </div>
                          <h6 className="card-subtitle mb-2">{element.name}</h6>
                          <p className="card-text small mb-1">
                            Atomic Weight: {element.atomicWeight}
                          </p>
                          <p className="card-text small">
                            Group: {element.group}, Period: {element.period}
                          </p>
                          <span className={`badge ${element.color}`}>
                            {element.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
  
            {/* Element Details Modal */}
            <div
              className="modal fade"
              id="elementModal"
              tabIndex="-1"
              aria-labelledby="elementModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className={`modal-content ${darkMode ? 'bg-dark text-light' : ''}`}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="elementModalLabel">
                      {selectedElement && (
                        <>
                          <span className="fs-1">{selectedElement.symbol}</span> -{' '}
                          {selectedElement.name}
                        </>
                      )}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {selectedElement && (
                      <div className="row">
                        <div className="col-md-6">
                          <div
                            className={`card mb-3 ${selectedElement.color} bg-opacity-25 ${
                              darkMode ? 'text-light border-secondary' : ''
                            }`}
                          >
                            <div className="card-body">
                              <h3 className="card-title">
                                {selectedElement.symbol}
                              </h3>
                              <h5 className="card-subtitle mb-2">
                                {selectedElement.name}
                              </h5>
                              <p className="card-text">
                                Atomic Number: {selectedElement.id}
                              </p>
                              <p className="card-text">
                                Atomic Weight: {selectedElement.atomicWeight}
                              </p>
                              <p className="card-text">
                                Electron Configuration:{' '}
                                {selectedElement.electronConfig}
                              </p>
                              <p className="card-text">
                                Group: {selectedElement.group}, Period:{' '}
                                {selectedElement.period}
                              </p>
                              <span className={`badge ${selectedElement.color}`}>
                                {selectedElement.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h5>Description:</h5>
                          <p>{selectedElement.description}</p>
                          <h5>Common Uses:</h5>
                          <p>{selectedElement.uses}</p>
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => addBookmark(selectedElement)}
                          >
                            <i className="bi bi-bookmark-plus"></i> Bookmark
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Bookmarks Offcanvas */}
            <div
              className={`offcanvas offcanvas-start ${
                darkMode ? 'bg-dark text-light' : ''
              }`}
              tabIndex="-1"
              id="bookmarksOffcanvas"
              aria-labelledby="bookmarksOffcanvasLabel"
              show={showOffcanvas ? 'true' : 'false'}
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="bookmarksOffcanvasLabel">
                  <i className="bi bi-bookmark-heart"></i> Bookmarked Elements
                </h5>
                <button
                  type="button"
                  className="btn btn-close text-reset"
                  onClick={() => setShowOffcanvas(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                {bookmarks.length === 0 ? (
                  <div className="alert alert-info">
                    You haven't bookmarked any elements yet. Click the bookmark
                    button on any element to add it here.
                  </div>
                ) : (
                  <div className="list-group">
                    {bookmarks.map((element) => (
                      <div
                        key={element.id}
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <strong>{element.symbol}</strong> - {element.name}
                        </div>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => removeBookmark(element.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
  
            {/* Info Modal */}
            <div
              className="modal fade"
              id="infoModal"
              tabIndex="-1"
              aria-labelledby="infoModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className={`modal-content ${darkMode ? 'bg-dark text-light' : ''}`}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="infoModalLabel">
                      About the Periodic Table
                    </h5>
                    <button
                      type="button"
                      className="btn btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      The periodic table is a tabular arrangement of chemical
                      elements, organized by their atomic number, electron
                      configuration, and recurring chemical properties. Elements are
                      presented in order of increasing atomic number.
                    </p>
                    <div className="accordion" id="periodicTableInfo">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button ${
                              darkMode ? 'bg-dark text-light' : ''
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            History of the Periodic Table
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#periodicTableInfo"
                        >
                          <div
                            className={`accordion-body ${
                              darkMode ? 'bg-dark text-light' : ''
                            }`}
                          >
                            <p>
                              The periodic table was first created by Russian chemist
                              Dmitri Mendeleev in 1869. He arranged chemical elements by
                              their atomic weight, and noticed patterns in their
                              properties, allowing him to place them in groups.
                            </p>
                            <p>
                              The modern periodic table is arranged by atomic number rather
                              than weight, following Henry Moseley's work in 1913.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className={`accordion-button collapsed ${
                              darkMode ? 'bg-dark text-light' : ''
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Structure and Organization
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#periodicTableInfo"
                        >
                          <div
                            className={`accordion-body ${
                              darkMode ? 'bg-dark text-light' : ''
                            }`}
                          >
                            <p>Elements are arranged in periods (rows) and groups (columns):</p>
                            <ul>
                              <li>Groups share similar chemical properties</li>
                              <li>
                                Periods show trends in atomic radius, ionization energy,
                                and electronegativity
                              </li>
                            </ul>
                            <p>
                              The table is divided into blocks based on the electron shell
                              being filled: s-block, p-block, d-block, and f-block elements.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            {/* About Modal */}
            <div
              className="modal fade"
              id="aboutModal"
              tabIndex="-1"
              aria-labelledby="aboutModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className={`modal-content ${darkMode ? 'bg-dark text-light' : ''}`}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="aboutModalLabel">
                      About This Application
                    </h5>
                    <button
                      type="button"
                      className="btn btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      The Interactive Periodic Table & Chemical Explorer is a web
                      application designed to help users explore and learn about chemical
                      elements in an engaging way.
                    </p>
                    <p>Features include:</p>
                    <ul>
                      <li>Interactive element cards with detailed information</li>
                      <li>Filtering by element category</li>
                      <li>Search functionality</li>
                      <li>Element bookmarking system</li>
                      <li>Educational quiz mode</li>
                      <li>Dark mode support</li>
                    </ul>
                    <p>This application was built using React and Bootstrap 5.</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Help Modal */}
            <div
              className="modal fade"
              id="helpModal"
              tabIndex="-1"
              aria-labelledby="helpModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className={`modal-content ${darkMode ? 'bg-dark text-light' : ''}`}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="helpModalLabel">
                      Help & Instructions
                    </h5>
                    <button
                      type="button"
                      className="btn btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="accordion" id="helpAccordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingBasics">
                          <button
                            className={`accordion-button ${
                              darkMode ? 'bg-dark text-light' : ''
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseBasics"
                            aria-expanded="true"
                            aria-controls="collapseBasics"
                          >
                            Basic Navigation
                          </button>
                        </h2>
                        <div
                          id="collapseBasics"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingBasics"
                          data-bs-parent="#helpAccordion"
                        >
                          <div
                            className={`accordion-body ${
                              darkMode ? 'bg-dark text-light' : ''
                            }`}
                          >
                            <p>To get started:</p>
                            <ol>
                              <li>Browse the element cards in the Periodic Table section</li>
                              <li>Click on any element card to view detailed information</li>
                              <li>Use the category buttons to filter elements by type</li>
                              <li>Use the search box to find specific elements</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingBookmarks">
                          <button
                            className={`accordion-button collapsed ${
                              darkMode ? 'bg-dark text-light' : ''
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseBookmarks"
                            aria-expanded="false"
                            aria-controls="collapseBookmarks"
                          >
                            Using Bookmarks
                          </button>
                        </h2>
                        <div
                          id="collapseBookmarks"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingBookmarks"
                          data-bs-parent="#helpAccordion"
                        >
                          <div
                            className={`accordion-body ${
                              darkMode ? 'bg-dark text-light' : ''
                            }`}
                          >
                            <p>To bookmark elements:</p>
                            <ol>
                              <li>Click on an element to open its details</li>
                              <li>Click the "Bookmark" button</li>
                              <li>
                                Access your bookmarked elements by clicking "Bookmarks" in the navigation
                                bar
                              </li>
                              <li>Remove bookmarks by clicking the trash icon</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingQuiz">
                          <button
                            className={`accordion-button collapsed ${
                              darkMode ? 'bg-dark text-light' : ''
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseQuiz"
                            aria-expanded="false"
                            aria-controls="collapseQuiz"
                          >
                            Quiz Mode
                          </button>
                        </h2>
                        <div
                          id="collapseQuiz"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingQuiz"
                          data-bs-parent="#helpAccordion"
                        >
                          <div
                            className={`accordion-body ${
                              darkMode ? 'bg-dark text-light' : ''
                            }`}
                          >
                            <p>To test your knowledge:</p>
                            <ol>
                              <li>Click "Quiz" in the navigation bar</li>
                              <li>Click "Start Quiz" to begin</li>
                              <li>Answer the questions by typing in the answer field</li>
                              <li>
                                Click "Submit Answer" to check your answer and move to the next question
                              </li>
                              <li>View your score at the end of the quiz</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Contact Modal */}
            <div
              className="modal fade"
              id="contactModal"
              tabIndex="-1"
              aria-labelledby="contactModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className={`modal-content ${darkMode ? 'bg-dark text-light' : ''}`}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="contactModalLabel">
                      Contact Us
                    </h5>
                    <button
                      type="button"
                      className="btn btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="contactName" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="contactName"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="contactEmail" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="contactEmail"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="contactSubject" className="form-label">
                          Subject
                        </label>
                        <select className="form-select" id="contactSubject">
                          <option selected>Please select a subject</option>
                          <option value="feedback">Feedback</option>
                          <option value="suggestion">Suggestion</option>
                          <option value="report">Report an issue</option>
                          <option value="question">Question</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="contactMessage" className="form-label">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="contactMessage"
                          rows="5"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Quiz Modal */}
            <div
              className="modal fade"
              id="quizModal"
              tabIndex="-1"
              aria-labelledby="quizModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className={`modal-content ${darkMode ? 'bg-dark text-light' : ''}`}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="quizModalLabel">
                      Element Quiz
                    </h5>
                    <button
                      type="button"
                      className="btn btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {quizMode ? (
                      <div>
                        <div className="alert alert-primary">
                          <p className="mb-0">
                            Question {quizTotal + 1}:{' '}
                            {quizQuestion?.question}
                          </p>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="quizAnswer" className="form-label">
                            Your Answer:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="quizAnswer"
                            value={quizAnswer}
                            onChange={(e) => setQuizAnswer(e.target.value)}
                          />
                        </div>
                        <button
                          className="btn btn-primary"
                          onClick={checkQuizAnswer}
                        >
                          Submit Answer
                        </button>
                      </div>
                    ) : (
                      <div className="d-flex flex-column align-items-center">
                        <p>Ready to test your periodic table knowledge?</p>
                        <button
                          className="btn btn-success mb-2"
                          onClick={startQuiz}
                        >
                          Start Quiz
                        </button>
                        <button className="btn btn-secondary" onClick={endQuiz}>
                          Exit Quiz
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={endQuiz}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Bookmark Toast */}
            <div
              className="toast-container position-fixed bottom-0 end-0 p-3"
              style={{ zIndex: 1100 }}
            >
              <div
                id="bookmarkToast"
                className="toast"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <strong className="me-auto">Bookmark Added</strong>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="toast-body">Element has been bookmarked.</div>
              </div>
            </div>
            
          </>
        )}
      </div>
    );
  }
  
  export default App;
  