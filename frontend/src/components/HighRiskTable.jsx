import React from 'react';
import { AlertTriangle, MapPin, ChevronRight, Waves } from 'lucide-react';

const REGIONAL_AFFECTED_AREAS = {
  assam: [
    { id: 'barpeta', location: 'Barpeta Downstream Plains', state: 'Assam', channel: 'Brahmaputra / Manas', lat: 26.32, lon: 91.00, score: 96, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'dhubri', location: 'Dhubri Border Inundation Zone', state: 'Assam', channel: 'Brahmaputra / Gadadhar', lat: 26.02, lon: 89.98, score: 94, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'silchar', location: 'Silchar Urban & Rural Basin', state: 'Assam', channel: 'Barak River', lat: 24.83, lon: 92.77, score: 95, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'kamrup', location: 'Kamrup & Guwahati Floodplains', state: 'Assam', channel: 'Brahmaputra / Digaru', lat: 26.18, lon: 91.75, score: 88, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'morigaon', location: 'Morigaon Low-Lying Wetlands', state: 'Assam', channel: 'Kopili / Kolong', lat: 26.25, lon: 92.34, score: 86, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'dhemaji', location: 'Dhemaji Flash Surge Basin', state: 'Assam', channel: 'Subansiri / Jiadhal', lat: 27.48, lon: 94.58, score: 82, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' }
  ],
  bihar: [
    { id: 'kosi_paleo', location: 'Kosi Active Paleochannel', state: 'Bihar', channel: 'Kosi River', lat: 25.85, lon: 86.85, score: 95, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'gandak', location: 'Gandak Embankment Floodplains', state: 'Bihar', channel: 'Gandak River', lat: 26.47, lon: 84.44, score: 92, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'bagmati', location: 'Bagmati Lowland Basin', state: 'Bihar', channel: 'Bagmati River', lat: 26.12, lon: 85.39, score: 89, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'darbhanga', location: 'Darbhanga Inundation Zone', state: 'Bihar', channel: 'Kamla Balan', lat: 26.15, lon: 85.89, score: 87, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'supaul', location: 'Supaul & Madhepura Plains', state: 'Bihar', channel: 'Kosi Eastern Canal', lat: 26.12, lon: 86.60, score: 85, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'patna_ganga', location: 'Patna Gangetic Confluence', state: 'Bihar', channel: 'Ganga / Son Rivers', lat: 25.61, lon: 85.14, score: 79, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' }
  ],
  kerala: [
    { id: 'aluva', location: 'Aluva & Lower Periyar Delta', state: 'Kerala', channel: 'Periyar River', lat: 10.11, lon: 76.35, score: 97, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'kuttanad', location: 'Kuttanad Below-Sea-Level Plain', state: 'Kerala', channel: 'Pamba / Meenachil', lat: 9.49, lon: 76.43, score: 94, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'chalakudy', location: 'Chalakudy River Spillway Zone', state: 'Kerala', channel: 'Chalakudy River', lat: 10.30, lon: 76.33, score: 91, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'idukki', location: 'Idukki Catchment & Dam Basin', state: 'Kerala', channel: 'Cheruthoni River', lat: 9.85, lon: 76.97, score: 86, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'alappuzha', location: 'Alappuzha Estuarine Wetlands', state: 'Kerala', channel: 'Vembanad Lake', lat: 9.49, lon: 76.33, score: 84, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'thrissur', location: 'Thrissur Lowland Kole Basin', state: 'Kerala', channel: 'Karuvannur River', lat: 10.52, lon: 76.21, score: 78, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' }
  ],
  odisha: [
    { id: 'mundali', location: 'Mundali / Mahanadi Delta Apex', state: 'Odisha', channel: 'Mahanadi River', lat: 20.44, lon: 85.74, score: 94, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'kendrapara', location: 'Kendrapara & Jagatsinghpur Estuary', state: 'Odisha', channel: 'Kathajodi / Devi Rivers', lat: 20.50, lon: 86.42, score: 91, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'cuttack', location: 'Cuttack Low-Lying Floodways', state: 'Odisha', channel: 'Mahanadi / Birupa', lat: 20.46, lon: 85.88, score: 88, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'baitarani', location: 'Baitarani Basin & Jajpur Plains', state: 'Odisha', channel: 'Baitarani River', lat: 20.85, lon: 86.33, score: 85, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'puri_coastal', location: 'Puri Coastal Inundation Basin', state: 'Odisha', channel: 'Daya / Bhargavi Rivers', lat: 19.81, lon: 85.83, score: 82, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' },
    { id: 'bhadrak', location: 'Bhadrak Dhamra Coastal Zone', state: 'Odisha', channel: 'Salandi River', lat: 21.05, lon: 86.51, score: 76, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' }
  ],
  maharashtra: [
    { id: 'chiplun', location: 'Chiplun Urban Floodplain', state: 'Maharashtra', channel: 'Vashishti River', lat: 17.53, lon: 73.51, score: 96, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'mahad', location: 'Mahad Lowland Estuary', state: 'Maharashtra', channel: 'Savitri River', lat: 18.08, lon: 73.42, score: 93, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'panchganga', location: 'Panchganga Sangam / Kolhapur', state: 'Maharashtra', channel: 'Panchganga River', lat: 16.70, lon: 74.24, score: 91, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'sangli', location: 'Sangli Krishna River Front', state: 'Maharashtra', channel: 'Krishna River', lat: 16.85, lon: 74.58, score: 87, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'karad', location: 'Karad Confluence Basin', state: 'Maharashtra', channel: 'Koyna / Krishna Rivers', lat: 17.28, lon: 74.18, score: 82, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' },
    { id: 'mumbai_mithi', location: 'Mumbai Mithi River Basin', state: 'Maharashtra', channel: 'Mithi River / Mahim Creek', lat: 19.07, lon: 72.87, score: 89, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' }
  ],
  'uttar-pradesh': [
    { id: 'yamuna_delhi', location: 'Yamuna Floodplain Corridor', state: 'UP / Delhi', channel: 'Yamuna River', lat: 28.61, lon: 77.23, score: 93, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'varanasi', location: 'Varanasi Ghats & Plains', state: 'Uttar Pradesh', channel: 'Ganga / Varuna', lat: 25.31, lon: 82.97, score: 88, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'prayagraj', location: 'Prayagraj Sangam Confluence', state: 'Uttar Pradesh', channel: 'Ganga / Yamuna', lat: 25.43, lon: 81.84, score: 85, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'gorakhpur', location: 'Gorakhpur Rapti Basin', state: 'Uttar Pradesh', channel: 'Rapti / Rohini', lat: 26.76, lon: 83.37, score: 84, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'agra', location: 'Agra Low-Lying Taj Corridor', state: 'Uttar Pradesh', channel: 'Yamuna River', lat: 27.17, lon: 78.00, score: 79, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' }
  ],
  'west-bengal': [
    { id: 'sundarbans', location: 'Sundarbans Estuarine Islands', state: 'West Bengal', channel: 'Hooghly / Matla Rivers', lat: 22.05, lon: 88.75, score: 94, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'murshidabad', location: 'Murshidabad Bhagirathi Plain', state: 'West Bengal', channel: 'Bhagirathi-Hooghly', lat: 24.18, lon: 88.27, score: 89, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'malda', location: 'Malda Mahananda Lowlands', state: 'West Bengal', channel: 'Mahananda River', lat: 25.01, lon: 88.14, score: 86, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'ghatal', location: 'Ghatal Damodar Floodway', state: 'West Bengal', channel: 'Damodar / Silabati', lat: 22.67, lon: 87.72, score: 84, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'howrah', location: 'Howrah Coastal Estuary', state: 'West Bengal', channel: 'Rupnarayan River', lat: 22.59, lon: 88.26, score: 78, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' }
  ],
  gujarat: [
    { id: 'banas', location: 'Banaskantha & Dantiwada Plains', state: 'Gujarat', channel: 'Banas River', lat: 24.17, lon: 72.43, score: 91, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'morbi', location: 'Morbi Machchhu Basin', state: 'Gujarat', channel: 'Machchhu River', lat: 22.81, lon: 70.83, score: 86, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'bharuch', location: 'Bharuch Narmada Estuary', state: 'Gujarat', channel: 'Narmada River', lat: 21.70, lon: 72.99, score: 83, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' },
    { id: 'surat', location: 'Surat Tapti Floodway Basin', state: 'Gujarat', channel: 'Tapti River', lat: 21.17, lon: 72.83, score: 79, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' }
  ],
  'tamil-nadu': [
    { id: 'chennai_basin', location: 'Chennai Adyar & Cooum Basins', state: 'Tamil Nadu', channel: 'Adyar / Chembarambakkam', lat: 13.08, lon: 80.27, score: 95, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'thanjavur', location: 'Cauvery Thanjavur Delta Apex', state: 'Tamil Nadu', channel: 'Cauvery / Kollidam', lat: 10.78, lon: 79.13, score: 88, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'cuddalore', location: 'Cuddalore Coastal Basin', state: 'Tamil Nadu', channel: 'Pennaiyar River', lat: 11.75, lon: 79.76, score: 84, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'nagapattinam', location: 'Nagapattinam Estuary Plain', state: 'Tamil Nadu', channel: 'Vettar River', lat: 10.76, lon: 79.84, score: 80, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' }
  ],
  telangana: [
    { id: 'hyderabad_musi', location: 'Hyderabad Musi Basin', state: 'Telangana', channel: 'Musi River', lat: 17.38, lon: 78.48, score: 89, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'bhadrachalam', location: 'Bhadrachalam Godavari Gorge', state: 'Telangana', channel: 'Godavari River', lat: 17.66, lon: 80.88, score: 92, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'manair', location: 'Karimnagar Lower Manair Basin', state: 'Telangana', channel: 'Manair River', lat: 18.43, lon: 79.12, score: 82, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' }
  ],
  'andhra-pradesh': [
    { id: 'rajahmundry', location: 'Godavari Delta (Rajahmundry)', state: 'Andhra Pradesh', channel: 'Godavari River', lat: 16.98, lon: 81.78, score: 91, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'vijayawada', location: 'Vijayawada Prakasam Barrage', state: 'Andhra Pradesh', channel: 'Krishna River', lat: 16.50, lon: 80.64, score: 88, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'srikakulam_nag', location: 'Srikakulam Nagavali Floodplain', state: 'Andhra Pradesh', channel: 'Nagavali River', lat: 18.29, lon: 83.89, score: 84, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' }
  ],
  karnataka: [
    { id: 'belagavi_krishna', location: 'Belagavi & Chikkodi Plains', state: 'Karnataka', channel: 'Krishna / Ghataprabha', lat: 15.84, lon: 74.49, score: 93, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'mangaluru_netra', location: 'Dakshina Kannada Netravati Basin', state: 'Karnataka', channel: 'Netravati River', lat: 12.91, lon: 74.85, score: 87, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'coorg_cauvery', location: 'Kodagu / Coorg Upper Catchment', state: 'Karnataka', channel: 'Cauvery River', lat: 12.42, lon: 75.73, score: 82, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' }
  ],
  'madhya-pradesh': [
    { id: 'narmadapuram', location: 'Narmadapuram Sethani Ghat', state: 'Madhya Pradesh', channel: 'Narmada River', lat: 22.75, lon: 77.72, score: 90, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'jabalpur_bheda', location: 'Jabalpur Bhedaghat Basin', state: 'Madhya Pradesh', channel: 'Narmada River', lat: 23.18, lon: 79.98, score: 86, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'chambal_morena', location: 'Morena & Sheopur Chambal Belt', state: 'Madhya Pradesh', channel: 'Chambal River', lat: 26.50, lon: 77.99, score: 81, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' }
  ],
  punjab: [
    { id: 'sutlej_rupnagar', location: 'Rupnagar & Anandpur Sahib', state: 'Punjab', channel: 'Sutlej River', lat: 30.96, lon: 76.52, score: 91, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'harike_pattan', location: 'Harike Wetland Confluence', state: 'Punjab', channel: 'Sutlej / Beas Sangam', lat: 31.15, lon: 74.96, score: 88, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'patiala_ghaggar', location: 'Patiala Ghaggar Overflow Basin', state: 'Punjab', channel: 'Ghaggar River', lat: 30.33, lon: 76.38, score: 83, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' }
  ],
  rajasthan: [
    { id: 'kota_barrage', location: 'Kota Barrage Floodway', state: 'Rajasthan', channel: 'Chambal River', lat: 25.18, lon: 75.83, score: 89, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'barmer_luni', location: 'Barmer & Jalore Lowlands', state: 'Rajasthan', channel: 'Luni River Flash Basin', lat: 25.75, lon: 71.39, score: 84, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'dholpur_chambal', location: 'Dholpur Chambal Basin', state: 'Rajasthan', channel: 'Chambal River', lat: 26.69, lon: 77.89, score: 80, level: 'High', levelColor: 'bg-orange-50 text-orange-700 border-orange-200' }
  ],
  'himachal-pradesh': [
    { id: 'kullu_beas', location: 'Kullu & Manali River Valley', state: 'Himachal Pradesh', channel: 'Beas River', lat: 31.95, lon: 77.10, score: 94, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'mandi_pandoh', location: 'Mandi Pandoh Dam Gorge', state: 'Himachal Pradesh', channel: 'Beas River', lat: 31.70, lon: 76.93, score: 90, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' }
  ],
  uttarakhand: [
    { id: 'kedar_mandakini', location: 'Rudraprayag Kedarnath Valley', state: 'Uttarakhand', channel: 'Mandakini River', lat: 30.73, lon: 79.06, score: 96, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'haridwar_ganga', location: 'Haridwar & Rishikesh Lowlands', state: 'Uttarakhand', channel: 'Ganga River', lat: 29.94, lon: 78.16, score: 86, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' }
  ],
  delhi: [
    { id: 'delhi_kashmere', location: 'Central Delhi Yamuna Floodplain', state: 'Delhi (NCT)', channel: 'Yamuna River', lat: 28.66, lon: 77.22, score: 92, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'delhi_okhla', location: 'Okhla Barrage & Kalindi Kunj', state: 'Delhi (NCT)', channel: 'Yamuna River', lat: 28.53, lon: 77.30, score: 87, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' }
  ],
  'jammu-kashmir': [
    { id: 'srinagar_jhelum', location: 'Srinagar Jhelum Basin', state: 'Jammu & Kashmir', channel: 'Jhelum River', lat: 34.08, lon: 74.79, score: 95, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'anantnag_upper', location: 'Anantnag Upper Jhelum Floodway', state: 'Jammu & Kashmir', channel: 'Jhelum River', lat: 33.73, lon: 75.15, score: 89, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' }
  ],
  india: [
    { id: 'kosi', location: 'Kosi River Active Basin', state: 'Bihar', channel: 'Kosi River', lat: 25.85, lon: 86.85, score: 95, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'brahmaputra', location: 'Brahmaputra Valley Floodplains', state: 'Assam', channel: 'Brahmaputra Basin', lat: 26.25, lon: 92.80, score: 94, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'periyar', location: 'Lower Periyar & Pamba Basins', state: 'Kerala', channel: 'Periyar / Pamba', lat: 10.11, lon: 76.35, score: 92, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'chiplun_nat', location: 'Chiplun & Konkan Coastal Plains', state: 'Maharashtra', channel: 'Vashishti River', lat: 17.53, lon: 73.51, score: 91, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'sundarbans_nat', location: 'Sundarbans Deltaic Islands', state: 'West Bengal', channel: 'Hooghly / Matla', lat: 22.05, lon: 88.75, score: 88, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' },
    { id: 'mahanadi_nat', location: 'Mahanadi Coastal Delta Plain', state: 'Odisha', channel: 'Mahanadi / Devi', lat: 20.44, lon: 85.74, score: 86, level: 'Very High', levelColor: 'bg-red-50 text-red-700 border-red-200' }
  ]
};

export default function HighRiskTable({
  currentRegion = 'india',
  selectedDisaster,
  onSelectArea
}) {
  const effectiveRegion = selectedDisaster?.region_id || (currentRegion === 'all' ? 'india' : currentRegion) || 'india';
  const areasList = REGIONAL_AFFECTED_AREAS[effectiveRegion] || REGIONAL_AFFECTED_AREAS['india'];
  const regionLabel = selectedDisaster ? `${selectedDisaster.name} (${selectedDisaster.state})` : (effectiveRegion === 'india' ? 'National Overview (All India)' : effectiveRegion.replace(/-/g, ' ').toUpperCase());

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col justify-between font-poppins h-full">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-orange-50 text-orange-600 border border-orange-200">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 tracking-tight">
                {effectiveRegion === 'india' ? 'Top High Risk Areas' : 'Affected & Vulnerable Inundation Zones'}
              </h3>
              <p className="text-[10px] text-slate-500 font-medium">
                Scope: <strong className="text-blue-700">{regionLabel}</strong>
              </p>
            </div>
          </div>

          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono">
            {areasList.length} Zones
          </span>
        </div>

        <div className="overflow-x-auto mt-2">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-2 px-2">Location &amp; Inundation Zone</th>
                <th className="py-2 px-2">River / Channel</th>
                <th className="py-2 px-2 text-center">Risk Score</th>
                <th className="py-2 px-2 text-right">Risk Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {areasList.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => onSelectArea && onSelectArea(item)}
                  className="hover:bg-blue-50/50 transition-colors cursor-pointer group"
                >
                  <td className="py-2.5 px-2 font-medium text-slate-800 flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-slate-900 truncate max-w-[180px]">{item.location}</span>
                  </td>
                  <td className="py-2.5 px-2 text-slate-500 font-medium text-[11px]">{item.channel || item.state}</td>
                  <td className="py-2.5 px-2 text-center font-bold font-mono text-slate-900">{item.score}</td>
                  <td className="py-2.5 px-2 text-right">
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.levelColor}`}>
                      {item.level}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
