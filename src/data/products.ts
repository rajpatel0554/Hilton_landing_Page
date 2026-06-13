export interface Product {
  id: string;
  name: string;
  size: string;
  variant: string;
  tab: "valves" | "saddles" | "fittings" | "bathroom" | "agri" | "Rain" | "Compression" | "Irrigation";
  img: string;
  material?: string;
}

export const CATALOG: Product[] = [
    // ════════════════════════════════
    // CATEGORY 1: BALL VALVES
    // ════════════════════════════════
    {
        id: '1',
        name: 'Solid Seal Ball Valve (Short Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Black',
        tab: 'valves',
        img: 'Picture1.png'
    },
    {
        id: '2',
        name: 'Solid Seal Ball Valve (Short Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'White',
        tab: 'valves',
        img: 'Picture2.png'
    },
    {
        id: '3',
        name: 'Solid Seal Ball Valve (long Handle)',
        size: '2" (63 mm) to 4" (110 mm) — includes 2", 2½", 3", 4"',
        variant: 'Black',
        tab: 'valves',
        img: 'Picture3.png'
    },
    {
        id: '4',
        name: 'Solid Seal Ball Valve (long Handle)',
        size: '2" (63 mm) to 4" (110 mm) — includes  2", 2½", 3", 4"',
        variant: 'White',
        tab: 'valves',
        img: 'Picture4.png'
    },
    {
        id: '5',
        name: 'MS Handle ball valve',
        size: '2" (63 mm) to 4" (110 mm) — includes  2", 2½", 3", 4"',
        variant: 'Black',
        tab: 'valves',
        img: 'Picture5.png'
    },
  {
        id: '301',
        name: 'MS Handle ball valve',
        size: '2" (63 mm) to 4" (110 mm) — includes  2", 2½", 3", 4"',
        variant: 'White',
        tab: 'valves',
        img: 'Picture6.png'
    },
  {
        id: '6',
        name: 'Ms Handle Ball Valve',
        size: '5" (140 mm) to 8" (200 mm) — includes 5", 6",7", 8"',
        variant: 'White',
        tab: 'valves',
        img: 'Picture7.png'
    },
    {
        id: '7',
        name: 'CPVC Ball Valve (Short Handle)',
        size: '3/4" (25 mm) to 2" (63 mm) — includes  3/4", 1", 1¼", 1½", 2"',
        variant: 'White',
        tab: 'valves',
        img: 'Picture8.png',
        material: 'PVC'
    }, 
    {
        id: '8',
        name: 'CPVC Ball Valve (Long Handle)',
        size: '3/4" (25 mm) to 2" (63 mm) — includes 3/4", 1", 1¼", 1½", 2"',
        variant: 'White',
        tab: 'valves',
        img: 'Picture9.png',
        material: 'PVC'
    }, 
    {
        id: '9',
        name: 'R-UPVC Ball Valve (Short Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'White',
        tab: 'valves',
        img: 'Picture10.png',
        material: 'PVC'
    },  
    {
        id: '10',
        name: 'R-UPVC Ball Valve (Long Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'White',
        tab: 'valves',
        img: 'Picture11.png',
        material: 'PVC'
    },  
    {
        id: '11',
        name: 'PP UPVC Ball Valve (Short Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'White',
        tab: 'valves',
        img: 'Picture12.png'
    }, 
    {
        id: '12',
        name: 'PP UPVC Ball Valve (Long Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'White',
        tab: 'valves',
        img: 'Picture13.png'
    },              
    {
        id: '13',
        name: 'Screwed ended Ball Valve',
        size: '1/2" (20 mm) to 10" (250 mm)',
        variant: 'White',
        tab: 'valves',
        img: 'Picture15.png'
    },  
    {
        id: '14',
        name: 'Male Female Ball Valve ',
        size: '1" (25 mm) ',
        variant: 'black',
        tab: 'valves',
        img: 'Picture16.png'
    },  
    {
        id: '15',
        name: 'MTA Rain Ball Valve',
        size: '1" (25mm)',
        variant: 'Black',
        tab: 'valves',
        img: 'Picture17.png'
    },      
    {
        id: '16',
        name: 'Three way Ball Valve Short Handle (Plan/Thread)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'White',
        tab: 'valves',
        img: 'Picture18.png'
    },  
    {
        id: '17',
        name: 'Three way Ball Valve Long Handle (Plan/Thread)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'White',
        tab: 'valves',
        img: 'Picture19.jpg'
    },  
    {
        id: '18',
        name: 'Single pic Ball Valve Short (Plan/Thread)',
        size: ' 1½" (50 mm) to 4" (110 mm) — includes 1½", 2", 2½", 3", 4"',
        variant: 'Black',
        tab: 'valves',
        img: 'Picture21.png'
    },  
    {
        id: '19',
        name: 'Prince Ball Valve (Plan/Thread)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Gray',
        tab: 'valves',
        img: 'Picture22.png'
    },  
    {
        id: '20',
        name: 'Rigid PVC Ball Valve (Short Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Black',
        tab: 'valves',
        img: 'Picture241.png',
        material: 'PVC'
    },  
    {
        id: '21',
        name: 'Rigid PVC Ball Valve (Long Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Gray',
        tab: 'valves',
        img: 'Picture242.png',
        material: 'PVC'
    },  
    {
        id: '22',
        name: 'Rigid PVC Ball Valve (Long Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'White',
        tab: 'valves',
        img: 'Picture243.png',
        material: 'PVC'
    },  

    // ════════════════════════════════
    // CATEGORY 2: Agricultural Products
    // ════════════════════════════════
    {
        id: '23',
        name: 'Service Saddle',
        size: '1½" to 10"  — includes 1½", 2", 2½", 3", 4", 5", 6", 8", 10"',
        variant: 'Black',
        tab: 'agri',
        img: 'Picture27.png'
    },  
    {
        id: '24',
        name: 'Pipe Saddle',
        size: '1½" to 10"  — includes 1½", 2", 2½", 3", 4", 5", 6", 8", 10"',
        variant: 'Grey',
        tab: 'agri',
        img: 'Picture28.png'
    },  
    {
        id: '25',
        name: 'D-Joint(Short)',
        size: '1½" to 10"  — includes 1½", 2", 2½", 3", 4", 5", 6", 8", 10"',
        variant: 'Black',
        tab: 'agri',
        img: 'Picture29.png'
    },  
    {
        id: '26',
        name: 'D-Joint(Long)',
        size: '1½" to 10"  — includes 1½", 2", 2½", 3", 4", 5", 6", 8", 10"',
        variant: 'Black',
        tab: 'agri',
        img: 'Picture30.png'
    },  
    {
        id: '27',
        name: 'Kundi Bara',
        size: '3", 4", 5", 6", 8", 10"',
        variant: 'Gray ',
        tab: 'agri',
        img: 'Picture31.png'
    },  
    {
        id: '28',
        name: 'Flange(Tel)',
        size: '2", 2½", 3", 4", 5", 6",7", 8", 10"',
        variant: 'Grey',
        tab: 'agri',
        img: 'Picture32.png'
    },  
    {
        id: '29',
        name: 'Flange with COller',
        size: '4"',
        variant: 'Grey',
        tab: 'agri',
        img: 'Picture33.png'
    },  
    {
        id: '30',
        name: 'M.T.A',
        size: '2", 2½", 3", 4"',
        variant: 'white',
        tab: 'agri',
        img: 'Picture34.png'
    },  
    {
        id: '31',
        name: 'Bore Cap',
        size: '4", 5", 6", 8", 10"',
        variant: 'Black',
        tab: 'agri',
        img: 'Picture35.png'
    },  
    {
        id: '32',
        name: 'Back Flow NRV',
        size: '2", 2½", 3", 4", 5", 6"',
        variant: 'Gray',
        tab: 'agri',
        img: 'Picture36.png'
    },  
    {
        id: '33',
        name: 'Elbow(Gray)',
        size: '1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Gray',
        tab: 'agri',
        img: 'Picture37.png'
    },  
    {
        id: '34',
        name: 'Elbow(Vergin)',
        size: '1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Gray',
        tab: 'agri',
        img: 'Picture38.png'
    },  
    {
        id: '35',
        name: 'TEE(Gray)',
        size: '1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Gray',
        tab: 'agri',
        img: 'Picture39.jpg'
    },  
    {
        id: '36',
        name: 'TEE(Vergin)',
        size: '1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Gray',
        tab: 'agri',
        img: 'Picture40.png'
    },  
    {
        id: '37',
        name: 'Coupler(Gray)',
        size: '1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Gray',
        tab: 'agri',
        img: 'Picture42.jpg'
    },  
    {
        id: '38',
        name: 'Vent Coul(Gray)',
        size: '1½", 2", 2½", 3", 4"',
        variant: 'Gray',
        tab: 'agri',
        img: 'Picture41.jpg'
    },  
    {
        id: '39',
        name: 'Union Black(Plain)',
        size: '2", 2½", 3"',
        variant: 'black',
        tab: 'agri',
        img: 'Picture44.png'
    },  
    {
        id: '40',
        name: 'Nani Trap',
        size: '1½", 2", 2½", 3", 4"',
        variant: 'White',
        tab: 'agri',
        img: 'Picture45.jpg'
    },  
    {
        id: '41',
        name: 'Jali(Nani Trap)',
        size: '1½", 2", 2½", 3", 4"',
        variant: 'Gray',
        tab: 'agri',
        img: 'Picture43.png'
    },  
    {
        id: '42',
        name: 'End Cap(Plain/thread)',
        size: '1½", 2", 2½", 3", 4"',
        variant: 'Gray',
        tab: 'agri',
        img: 'Picture46.jpg'
    },  
    {
        id: '43',
        name: 'Monoset Jali',
        size: '1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Blue',
        tab: 'agri',
        img: 'Picture52.png'
    },  
    {
        id: '44',
        name: 'Bend With Jali',
        size: '1", 1¼", 1½", 2", 2½"',
        variant: 'White',
        tab: 'agri',
        img: 'Picture53.png'
    },  
    {
        id: '45',
        name: 'Monoset Jali(S.S Light)',
        size: '2", 2½", 3"',
        variant: 'Blue',
        tab: 'agri',
        img: 'Picture54.png'
    },  
    {
        id: '46',
        name: 'Monoset Jali(S.S Heavy)',
        size: '2", 2½", 3"',
        variant: 'Blue',
        tab: 'agri',
        img: 'Picture55.png'
    },  
    {
        id: '47',
        name: 'Monoset Jali(S.S)',
        size: '2", 2½", 3"',
        variant: 'White',
        tab: 'agri',
        img: 'Picture56.png'
    },  
    {
        id: '48',
        name: 'Unbreakalbe Jali',
        size: '2", 2½", 3"',
        variant: 'Pink',
        tab: 'agri',
        img: 'Picture57.png'
    },  
    {
        id: '49',
        name: 'Pipe Clamp',
        size: '2", 2½", 3", 4"',
        variant: 'Gray',
        tab: 'agri',
        img: 'Picture58.png'
    },  
    {
        id: '50',
        name: 'SWR Clamp',
        size: '2", 2½", 3", 4"',
        variant: 'Gray',
        tab: 'agri',
        img: 'Picture59.png'
    }, 
    {
        id: '51',
        name: 'H.B Green Foot Valve',
        size: '50mm, 65mm, 80mm, 100mm',
        variant: 'Green',
        tab: 'agri',
        img: 'Picture60.png'
    }, 
    {
        id: '52',
        name: 'Foot Valve(Spring)',
        size: '32mm, 40mm, 50mm, 65mm, 80mm, 100mm',
        variant: 'Red',
        tab: 'agri',
        img: 'Picture68.png'
    },
    {
        id: '53',
        name: 'Service Saddle',
        size: '1½", 2", 2½", 3", 4", 5", 6"',
        variant: 'White',
        tab: 'agri',
        img: 'Picture61.png'
    },  
    {
        id: '54',
        name: 'Pipe Saddle',
        size: ' 2", 2½", 3", 4", 5", 6"',
        variant: 'White',
        tab: 'agri',
        img: 'Picture62.png'
    },
    {
        id: '55',
        name: 'D-Joint(Short)',
        size: '2", 2½", 3", 4", 5", 6", 8", 10"',
        variant: 'White',
        tab: 'agri',
        img: 'Picture63.png'
    },  
    {
        id: '56',
        name: 'D-Joint(Long)',
        size: '2", 2½", 3", 4", 5", 6", 8", 10"',
        variant: 'White',
        tab: 'agri',
        img: 'Picture64.png'
    },
    {
        id: '57',
        name: 'Foot Valve(Spring)',
        size: '15mm, 20mm, 25mm ',
        variant: 'Red',
        tab: 'agri',
        img: 'Picture65.png'
    },
    {
        id: '58',
        name: 'Nipple Foot Valve(Spring/Flap)',
        size: '15mm, 20mm, 25mm',
        variant: 'Red',
        tab: 'agri',
        img: 'Picture66.png'
    },
    {
        id: '59',
        name: 'NRV (Spring)',
        size: '15mm, 20mm, 25mm',
        variant: 'Red',
        tab: 'agri',
        img: 'Picture67.png'
    },
    {
        id: '60',
        name: 'Air Valve',
        size: '15mm, 20mm, 25mm, 32mm, 40mm, 50mm',
        variant: 'Red',
        tab: 'agri',
        img: 'Picture69.png'
    },
    {
        id: '61',
        name: 'Citi AIR Valv',
        size: '15mm, 20mm, 25mm',
        variant: 'Green, White',
        tab: 'agri',
        img: 'Picture70.png'
    },
    {
        id: '62',
        name: 'Mono Check Valve',
        size: '25mm',
        variant: 'Black',
        tab: 'agri',
        img: 'Picture71.png'
    },
    {
        id: '63',
        name: 'Foot Valve(Thread)',
        size: '15mm, 20mm, 25mm  32mm, 40mm, 50mm, 65mm, 80mm, 100mm, 125, 150',
        variant: 'Red',
        tab: 'agri',
        img: 'Picture72.png'
    },
    {
        id: '64',
        name: 'Nut Bolt Valve',
        size: '32mm, 40mm, 50mm, 65mm, 80mm, 100mm, 125, 150',
        variant: 'Red',
        tab: 'agri',
        img: 'Picture73.png'
    },
    {
        id: '65',
        name: 'Bore Foot Valve',
        size: '50mm, 65mm, 80mm, 100mm',
        variant: 'Red',
        tab: 'agri',
        img: 'Picture74.png'
    },
    {
        id: '66',
        name: 'NON Return Valve',
        size: '32mm, 40mm, 50mm, 65mm, 80mm, 100mm, 125, 150',
        variant: 'Red',
        tab: 'agri',
        img: 'Picture75.png'
    },

    // ════════════════════════════════
    // CATEGORY 3: Pipe Fitting
    // ════════════════════════════════
    {
        id: '67',
        name: 'Hose Coller(OUT Thread)',
        size: '15mm, 20mm, 25mm  32mm, 40mm, 50mm, 65mm, 80mm, 100mm, 125, 150',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture76.png'
    },
    {
        id: '68',
        name: 'Hose Coller(IN Thread)',
        size: '15mm, 20mm, 25mm  32mm, 40mm, 50mm, 65mm, 80mm, 100mm',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture77.png'
    },
    {
        id: '69',
        name: 'Hose Connector',
        size: '15mm, 20mm, 25mm  32mm, 40mm, 50mm, 65mm, 80mm, 100mm, 125, 150, 200',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture78.png'
    },
    {
        id: '70',
        name: 'Hose Connector',
        size: '32mm, 40mm, 50mm, 65mm, 80mm, 100mm',
        variant: 'Black',
        tab: 'fittings',
        img: 'Picture79.png'
    },
    {
        id: '71',
        name: 'Hose Connector/ Connector(Reduce)',
        size: '15 X 20, 15 X 25, 20 X 25, 15 X 32, 20 X 32, 25 X 32, 32 X 40, 25 X 40, 40 X 50, 50 X 65, 65 X 80, 80 X 100',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture80.png'
    },
    {
        id: '72',
        name: 'Reduce Bushing',
        size: '15 X 20, 15 X 25, 20 X 25, 25 X 32, 32 X 40, 25 X 40, 40 X 50, 50 X 65, 65 X 80, 80 X 100',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture81.png'
    },
    {
        id: '73',
        name: 'Reduce Hose Coller',
        size: '15 X 20, 15 X 25, 20 X 25, 25 X 32, 32 X 40, 25 X 40, 40 X 50, 50 X 65, 65 X 80, 80 X 100',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture82.png'
    },
    {
        id: '74',
        name: 'TEE Connector',
        size: '2", 2½"',
        variant: 'BLue',
        tab: 'fittings',
        img: 'Picture83.png'
    },
    {
        id: '75',
        name: 'Blue Threaded Band',
        size: '1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture84.png'
    },
    {
        id: '76',
        name: 'Blue Threaded Flange',
        size: '1½", 2", 2½", 3", 4"',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture85.png'
    },
    {
        id: '77',
        name: 'Tank Nipple',
        size: '1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3",',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture86.png'
    },
    {
        id: '78',
        name: 'Tank Nipple',
        size: '1/2", 3/4", 1", 1¼", 1½", 2"',
        variant: 'White',
        tab: 'fittings',
        img: 'Picture87.png'
    },
    {
        id: '79',
        name: 'Check Nut',
        size: '1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3",',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture88.png'
    },
    {
        id: '80',
        name: 'Pipe Nipple(3", 4", 6", 9", 12")',
        size: '1/2", 3/4", 1", 1¼", 1½", 2", 2½",',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture94.png'
    },
    {
        id: '82',
        name: 'PP Elbow(Thread)',
        size: '15mm, 20mm, 25mm  32mm, 40mm, 50mm, 65mm, 80mm',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture96.png'
    },
    {
        id: '83',
        name: 'PP TEE(Thread)',
        size: '15mm, 20mm, 25mm  32mm, 40mm, 50mm, 65mm, 80mm',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture97.png'
    },
    {
        id: '84',
        name: 'PP Cupline(Thread)',
        size: '15mm, 20mm, 25mm  32mm, 40mm, 50mm, 65mm, 80mm',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture98.png'
    },
    {
        id: '85',
        name: 'PP Union(Thread)',
        size: '15mm, 20mm, 25mm  32mm, 40mm, 50mm, 65mm, 80mm',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture99.png'
    },
    {
        id: '86',
        name: 'PP Hex Nipple(Thread)',
        size: '15mm, 20mm, 25mm  32mm, 40mm, 50mm, 65mm, 80mm',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture100.png'
    },
    {
        id: '87',
        name: 'PP Plug/Bush(Thread)',
        size: '15mm, 20mm, 25mm  32mm, 40mm, 50mm, 65mm, 80mm',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture101.png'
    },
    {
        id: '302',
        name: 'PP Plug/Bush(Thread)',
        size: '15mm, 20mm, 25mm  32mm, 40mm, 50mm, 65mm, 80mm',
        variant: 'Black',
        tab: 'fittings',
        img: 'picture1001.jpeg'
    },
    {
        id: '88',
        name: 'PP Cap/Plug(Thread)',
        size: '15mm, 20mm, 25mm  32mm, 40mm, 50mm, 65mm, 80mm',
        variant: 'Blue',
        tab: 'fittings',
        img: 'Picture102.png'
    },

    // ════════════════════════════════
    // CATEGORY 4: Rain Pipe Fitting
    // ════════════════════════════════
    {
        id: '89',
        name: 'Jointer',
        size: ' 1¼", 1½"',
        variant: 'Black/green',
        tab: 'Rain',
        img: 'Picture214.png'
    },
    {
        id: '90',
        name: 'MTA',
        size: ' 1¼", 1½"',
        variant: 'Black/green',
        tab: 'Rain',
        img: 'Picture215.png'
    },
    {
        id: '91',
        name: 'ENd Cap',
        size: ' 1¼", 1½"',
        variant: 'Black/green',
        tab: 'Rain',
        img: 'Picture216.png'
    },
    {
        id: '92',
        name: 'Take of lateral Cork',
        size: ' 1¼"',
        variant: 'Black/Yellow',
        tab: 'Rain',
        img: 'Picture218.png'
    },
    {
        id: '93',
        name: 'Gromet',
        size: ' 1¼"',
        variant: 'Black',
        tab: 'Rain',
        img: 'Picture217.png'
    },
    {
        id: '94',
        name: 'Reduce lateral Cork',
        size: ' 1½" X 16MM, ½" X 20MM',
        variant: 'Black/Yellow',
        tab: 'Rain',
        img: 'Picture219.png'
    },
    {
        id: '95',
        name: 'Rain Pipe Semi',
        size: ' 40mm',
        variant: 'Black',
        tab: 'Rain',
        img: 'Picture221.png'
    },
    {
        id: '96',
        name: 'Rain Pipe Vergin',
        size: ' 40mm',
        variant: 'Black',
        tab: 'Rain',
        img: 'Picture220.png'
    },
    {
        id: '97',
        name: 'Rain Pipe Tape',
        size: ' 40mm',
        variant: 'Black',
        tab: 'Rain',
        img: 'Picture222.png'
    },

    // ════════════════════════════════
    // CATEGORY 5: compressor Fitting
    // ════════════════════════════════
    {
        id: '98',
        name: 'FTA Adaptor Brass Thread',
        size: ' 20mm',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture223.png'
    },
    {
        id: '99',
        name: 'FTA Adaptor Plain Thread',
        size: ' 20mm',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture224.png'
    },
    {
        id: '100',
        name: 'FTA Elbow Brass Thread',
        size: ' 20mm',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture225.png'
    },
    {
        id: '101',
        name: 'FTA Elbow Plain Thread',
        size: ' 20mm',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture226.png'
    },
    {
        id: '102',
        name: 'MTA Adaptor Brass Thread',
        size: ' 20mm',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture227.png'
    },
    {
        id: '103',
        name: 'MTA Adaptor Plain Thread',
        size: ' 20mm',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture228.png'
    },
    {
        id: '105',
        name: 'MTA Elbow Brass Thread',
        size: ' 20mm',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture229.png'
    },
    {
        id: '106',
        name: 'MTA Elbow Plain Thread',
        size: ' 20mm',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture230.png'
    },
    {
        id: '107',
        name: 'Compression End Cap',
        size: ' 20mm',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture231.png'
    },
    {
        id: '108',
        name: 'Compression Both Side Elbow',
        size: ' 20mm',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture232.png'
    },
    {
        id: '109',
        name: 'Compression Both Side Coupler',
        size: ' 20mm',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture234.png'
    },
    {
        id: '110',
        name: 'Compression TEE',
        size: ' 20mm',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture235.png'
    },
    {
        id: '111',
        name: 'Brass Ferrule',
        size: ' 20mm',
        variant: 'Golden',
        tab: 'Compression',
        img: 'Picture233.png'
    },
    {
        id: '112',
        name: 'Plastic Compression Ball Valve',
        size: ' 20mm',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture236.png'
    },
    {
        id: '113',
        name: 'Plastic Ferrule Brass Thread',
        size: ' 20mm',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture237.png'
    },
    {
        id: '114',
        name: 'DI pipe Saddle',
        size: ' 100mm * 1/2" / 150mm * 1/2" / 200mm * 1/2" ',
        variant: 'Blue',
        tab: 'Compression',
        img: 'Picture240.png'
    },

    // ════════════════════════════════
    // CATEGORY 6: Irrigation Products
    // ════════════════════════════════
    {
        id: '115',
        name: 'Jointer',
        size: ' 12mm / 16mm / 20mm / 16  X 20 mm',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture190.png'
    },
    {
        id: '116',
        name: 'Jointer',
        size: ' 16mm ',
        variant: 'Blue',
        tab: 'Irrigation',
        img: 'Picture191.png'
    },
    {
        id: '117',
        name: 'Take Off',
        size: ' 12mm / 16mm / 20mm / 16 X 20 mm',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture192.png'
    },
    {
        id: '118',
        name: 'Take Off',
        size: ' 16mm ',
        variant: 'Blue',
        tab: 'Irrigation',
        img: 'Picture1008.png'
    },
    {
        id: '119',
        name: 'End CAP',
        size: ' 12mm / 16mm / 20mm ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture194.png'
    },
    {
        id: '120',
        name: 'End CAP',
        size: ' 16mm ',
        variant: 'Blue',
        tab: 'Irrigation',
        img: 'Picture1007.png'
    },
    {
        id: '121',
        name: 'Gromet',
        size: ' 16mm ',
        variant: 'Blue',
        tab: 'Irrigation',
        img: 'Picture196.png'
    },
    {
        id: '122',
        name: 'Gromet Open & Close',
        size: ' 16mm ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture197.png'
    },
    {
        id: '123',
        name: 'Gromet EPDM',
        size: ' 16mm ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture198.png'
    },
    {
        id: '124',
        name: 'Lateral Cock',
        size: ' 12mm / 16mm / 20mm ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture199.png'
    },
    {
        id: '125',
        name: 'TEE Lateral Cock',
        size: ' 16mm ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture193.png'
    },
    {
        id: '126',
        name: 'TEE',
        size: ' 16mm / 20mm ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture202.png'
    },
    {
        id: '127',
        name: 'Elbow',
        size: ' 16mm / 20mm ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture200.png'
    },
    {
        id: '128',
        name: 'Pepsi Jointer',
        size: ' 16mm / 20mm ',
        variant: 'Black / Yellow',
        tab: 'Irrigation',
        img: 'Picture201.png'
    },
    {
        id: '129',
        name: 'Pepsi Lateral Cock',
        size: ' 16mm / 20mm / 16 * 20 mm',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture203.png'
    },
    {
        id: '130',
        name: 'Pepsi Take-Off',
        size: ' 16mm ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture205.png'
    },
    {
        id: '131',
        name: 'Pepsi End CAP',
        size: ' 16mm ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture204.png'
    },
    {
        id: '132',
        name: 'Y TEE',
        size: ' 16mm / 20mm ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture1004.jpeg'
    },
    {
        id: '133',
        name: 'Micro Sprinkler',
        size: ' 16mm ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture206.png'
    },
    {
        id: '134',
        name: 'Butter Fly Sprinkler (½”)',
        size: ' 12mm ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture209.png'
    },
    {
        id: '135',
        name: 'Adjustable Dripper',
        size: ' 16mm ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture207.png'
    },
    {
        id: '136',
        name: 'Online Dripper ',
        size: ' 16mm ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture208.png'
    },
    {
        id: '137',
        name: 'Reduce Literal Cock',
        size: ' 16 * 1/2"mm / 20 * 1/2" mm',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture210.png'
    },
    {
        id: '138',
        name: 'Sprinkler with Tube',
        size: ' 1/2" ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture213.png'
    },
    {
        id: '139',
        name: 'Ventury Set',
        size: ' 2" ',
        variant: 'Green',
        tab: 'Irrigation',
        img: 'Picture211.png'
    },
    {
        id: '140',
        name: 'Flush Valve',
        size: ' 1*1/2" /  2" / 2*1/2" ',
        variant: 'Black',
        tab: 'Irrigation',
        img: 'Picture212.png'
    },

    // ════════════════════════════════
    // CATEGORY 7: Senitry & Cocks
    // ════════════════════════════════
    {
        id: '141',
        name: 'Polypropylene (PP) Ball Cock',
        size: '15 mm to 25 mm',
        variant: 'White ',
        tab: 'bathroom',
        img: 'Picture90.png'
    },
    {
        id: '142',
        name: 'ABS Ball Cock Set',
        size: '15 mm to 25 mm',
        variant: 'White / Chrome Finish',
        tab: 'bathroom',
        img: 'Picture92.png',
        material: 'ABS'
    },
    {
        id: '143',
        name: 'PTMT Connection pipe',
        size: '12", 18", 24", 30", 36", 1m, 1.5m, 2m',
        variant: 'White Base + Stainless Nuts',
        tab: 'bathroom',
        img: 'Picture95.png',
        material: 'PTMT'
    },
    {
        id: '144',
        name: 'T-Cock Tap',
        size: '15 mm to 25 mm',
        variant: 'Red',
        tab: 'bathroom',
        img: 'Picture103.png'
    },
    {
        id: '145',
        name: 'Pan Cock (Heavy)',
        size: '15 mm to 25 mm',
        variant: 'Blue / Colored Knobs — Heavy & Deluxe variants available',
        tab: 'bathroom',
        img: 'Picture105.png'
    },
    {
        id: '146',
        name: 'Handi Cock Tap',
        size: '15 mm to 20 mm',
        variant: 'Blue / Colored — Ergonomic Design',
        tab: 'bathroom',
        img: 'Picture109.png'
    },
    {
        id: '147',
        name: 'Push Cock',
        size: '15 mm',
        variant: 'White — Pristine Smooth Pure',
        tab: 'bathroom',
        img: 'Picture106.png'
    },
    {
        id: '148',
        name: 'Mosco Adapter',
        size: '15 mm to 25 mm',
        variant: 'Pristine Smooth Pure',
        tab: 'bathroom',
        img: 'Picture107.png',
        material: 'PVC/polypropylene'
    },
    {
        id: '149',
        name: 'Concealed Bush(Light) ',
        size: '15 mm to 20 mm',
        variant: 'Ivery',
        tab: 'bathroom',
        img: 'Picture110.png'
    },
    {
        id: '150',
        name: 'Aaro Cock (Short)',
        size: '15 mm',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture114.png'
    },
    {
        id: '151',
        name: 'Aaro Cock (Long Thread)',
        size: '15 mm',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture115.png'
    },
    {
        id: '152',
        name: 'Jug Cock',
        size: '15 mm',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture116.png'
    },
    {
        id: '153',
        name: 'Three Way Elbow',
        size: '15 mm to 25 mm',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture118.png'
    },
    {
        id: '154',
        name: 'Dabba Shower',
        size: '15 mm fitting socket',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture120.png'
    },
    {
        id: '155',
        name: 'PP Polo Bib Cock Series',
        size: '1/2"',
        variant: 'White ', 
        tab: 'bathroom',
        img: 'Picture126.png'
    },
    {
        id: '156',
        name: 'PP Polo Nozzle',
        size: '1/2"',
        variant: 'White Shell', 
        tab: 'bathroom',
        img: 'Picture127.png'
    },
    {
        id: '157',
        name: 'PP Polo angle cock',
        size: '1/2"',
        variant: 'White Shell ', 
        tab: 'bathroom',
        img: 'Picture129.png'
    },
    {
        id: '158',
        name: 'PP Polo 2 way angle cock',
        size: '1/2"',
        variant: 'White Shell ', 
        tab: 'bathroom',
        img: 'Picture130.png'
    },
    {
        id: '159',
        name: 'PP Mosco Short Body',
        size: '1/2",3/4"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture134.png'
    },
    {
        id: '160',
        name: 'PP Mosco Long Body',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture135.png'
    },
    {
        id: '161',
        name: 'PP Mosco Nozzle',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture136.png'
    },
    {
        id: '162',
        name: 'PP Mosco Foam Flow',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'picture1009.png'
    },
    {
        id: '163',
        name: 'PP Mosco Angle Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture137.png'
    },
    {
        id: '164',
        name: 'PP Mosco Pillar Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture138.png'
    },
    {
        id: '165',
        name: 'Sink Coupling',
        size: '1¼" × 3" and 1¼" × 4"',
        variant: 'White / Grey — Standard Structural Run',
        tab: 'bathroom',
        img: 'Picture139.png'
    },
    {
        id: '166',
        name: 'Sink Coupling with double jali',
        size: '1¼" × 3" and 1¼" × 4"',
        variant: 'White / Grey — Standard Structural Run',
        tab: 'bathroom',
        img: 'Picture140.png'
    },
    {
        id: '167',
        name: 'West Coupling',
        size: '1¾"',
        variant: 'White / Grey — Standard Structural Run',
        tab: 'bathroom',
        img: 'Picture141.png'
    },
    {
        id: '168',
        name: 'PP Royal Bib Cock Short Body',
        size: '1/2"',
        variant: 'White ',
        tab: 'bathroom',
        img: 'Picture142.png'
    },
    {
        id: '169',
        name: 'PP Royal Bib Cock Long',
        size: '1/2"',
        variant: 'White ',
        tab: 'bathroom',
        img: 'Picture143.png'
    },
    {
        id: '170',
        name: 'PP Royal Bib Cock Nozzle',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture144.png'
    },
    {
        id: '171',
        name: 'PP Royal Bib Cock Foam Flow',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture145.png'
    },
    {
        id: '172',
        name: 'PP Royal Bib Cock Washing Machine',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture146.png'
    },
    {
        id: '173',
        name: 'PP Royal Bib Angle Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture147.png'
    },
    {
        id: '174',
        name: 'PP Royal Bib Pillar Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture148.png'
    },
    {
        id: '175',
        name: 'PP Royal Bib Sink Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture149.png'
    },
    {
        id: '176',
        name: 'Turbo Bib Cock Short Body',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture150.png'
    },
    {
        id: '177',
        name: 'Turbo Bib Cock Long Body',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture151.png'
    },
    {
        id: '178',
        name: 'Turbo Bib Nozzle cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture152.png'
    },
    {
        id: '179',
        name: 'Turbo Bib Foam Flow Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture153.png'
    },
    {
        id: '180',
        name: 'Turbo Bib Angle Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture154.png'
    },
    {
        id: '181',
        name: 'Zibra Bib Cock Series',
        size: '1/2"',
        variant: 'Blue',
        tab: 'bathroom',
        img: 'Picture155.png'
    },
    {
        id: '182',
        name: 'Corsa Bib Cock',
        size: '1/2"',
        variant: 'all type of colours',
        tab: 'bathroom',
        img: 'Picture156.png'
    },
    {
        id: '183',
        name: 'Diamond Bib Cock',
        size: '1/2"',
        variant: 'all type of colours',
        tab: 'bathroom',
        img: 'Picture158.png'
    },
    {
        id: '184',
        name: 'PP U-PVC Bib Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture159.png'
    },
    {
        id: '185',
        name: 'Fancy Bib Short Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture160.png'
    },
    {
        id: '186',
        name: 'Fancy Bib Long Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture161.png'
    },
    {
        id: '187',
        name: 'Fancy Bib Nozzle Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture162.png'
    },
    {
        id: '188',
        name: 'Fancy Bib Foam flow Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture163.png'
    },
    {
        id: '189',
        name: 'Fancy Bib angle Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture164.png'
    },
    {
        id: '190',
        name: 'Fancy Bib pillar Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture165.png'
    },
    {
        id: '191',
        name: 'Classic Bib Short Cock',
        size: '1/2"',
        variant: 'Classic White ',
        tab: 'bathroom',
        img: 'Picture166.png'
    },
    {
        id: '192',
        name: 'Classic Bib Long Cock',
        size: '1/2"',
        variant: 'Classic White ',
        tab: 'bathroom',
        img: 'Picture167.png'
    },
    {
        id: '193',
        name: 'Classic Bib Nozzle Cock',
        size: '1/2"',
        variant: 'White ',
        tab: 'bathroom',
        img: 'Picture168.png'
    },
    {
        id: '194',
        name: 'Classic Bib Foam Flow Cock',
        size: '1/2"',
        variant: 'White ',
        tab: 'bathroom',
        img: 'Picture169.png'
    },
    {
        id: '195',
        name: 'Classic Bib Washing Machine tape',
        size: '1/2"',
        variant: 'White ',
        tab: 'bathroom',
        img: 'Picture170.png'
    },
    {
        id: '196',
        name: 'Star Bib short Cock',
        size: '1/2" to 1"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture171.png'
    },
    {
        id: '197',
        name: 'Star Bib Long Cock',
        size: '1/2" to 1"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture172.png'
    },
    {
        id: '198',
        name: 'Star Bib Nozzle Cock',
        size: '1/2" to 1"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture173.png'
    },
    {
        id: '199',
        name: 'Star Bib Washing machine',
        size: '1/2" to 1"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture174.png'
    },
    {
        id: '200',
        name: 'Fancy Crystal Bib Short Cock',
        size: '1/2"',
        variant: 'White ',
        tab: 'bathroom',
        img: 'Picture175.png'
    },
    {
        id: '201',
        name: 'Fancy Crystal Bib Long Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture176.png'
    },
    {
        id: '202',
        name: 'Fancy Crystal Bib Nozzle Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture177.png'
    },
    {
        id: '203',
        name: 'Fancy Crystal Bib Foam Flow Cock',
        size: '1/2"',
        variant: 'White ',
        tab: 'bathroom',
        img: 'Picture178.png'
    },
    {
        id: '204',
        name: 'Fancy Crystal Bib Angle Cock',
        size: '1/2"',
        variant: 'White ',
        tab: 'bathroom',
        img: 'Picture179.png'
    },
    {
        id: '205',
        name: 'Fancy Crystal Bib Pillar Cock',
        size: '1/2"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture180.png'
    },
    {
        id: '206',
        name: 'Folding Gutter Jali',
        size: '6" × 6"',
        variant: 'White',
        tab: 'bathroom',
        img: 'Picture181.png'
    },
    {
        id: '207',
        name: 'ABS Slim Shower',
        size: '4"×4" (Square) · 6"×6" (Square)',
        variant: 'Chrome Plating Over White Core',
        tab: 'bathroom',
        img: 'Picture182.png',
        material: 'ABS'
    },
    {
        id: '208',
        name: 'ABS Slim Shower',
        size: '5"×5" (CIrcle) ',
        variant: 'Chrome Plating Over White Core',
        tab: 'bathroom',
        img: 'Picture183.jpg',
        material: 'ABS'
    },
    {
        id: '209',
        name: 'PP Slim Shower',
        size: '3" (Round)',
        variant: 'Standard Matte White / Grey',
        tab: 'bathroom',
        img: 'Picture184.png'
    },
    {
        id: '210',
        name: 'PP Deluxe Shower',
        size: '4" (Round)',
        variant: 'Standard Matte White / Grey',
        tab: 'bathroom',
        img: 'Picture185.png'
    },
    {
        id: '211',
        name: 'Waste Pipe (Standard)',
        size: '1¼" × 2.5 FT and 1¼" × 3 FT',
        variant: 'White / Grey — Corrugated Flexible Resin',
        tab: 'bathroom',
        img: 'Picture186.png'
    },
    {
        id: '212',
        name: 'Royal Spring Waste Pipe',
        size: '1¼"',
        variant: 'White — Reinforced Stretchable Pure Poly',
        tab: 'bathroom',
        img: 'Picture188.png'
    },
    {
        id: '213',
        name: 'Super Flow Waste Pipe',
        size: '1¼" × 2.5 FT and 1¼" × 3 FT',
        variant: 'White — Smooth Non-Clog Internal Layer',
        tab: 'bathroom',
        img: 'Picture189.png'
    }
];
