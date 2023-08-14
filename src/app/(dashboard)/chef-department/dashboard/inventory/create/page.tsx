"use client"
import React, { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Hardware from '../components/hardware';
import Software from '../components/software';

import { DashboardShell } from '@/components/shell';
import { DashboardHeader } from '@/components/header';

const hardwareAndSoftware = {
  software: {
    onPremise: [
      "Operating System",
      "Virtualization Software",
      "Web Server Software",
      "Database Software",
      "Backup and Recovery Software",
      "Messaging Software",
      "Network Management Software"
    ],
    cloudBased: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Cloud Storage",
      "Cloud Database",
      "Cloud Messaging",
      "Collaboration and Communication Software in the Cloud",
      "Cloud Backup Software"
    ]
  },
  hardware: {
    networkHardware: [
      "Router",
      "Switch",
      "Firewall",
      "Wireless Access Point",
      "Modem",
      "Wi-Fi Extender",
      "DNS Server (Domain Name System)",
      "DHCP Server (Dynamic Host Configuration Protocol)",
      "Proxy Server",
      "Load Balancer",
      "Intrusion Detection System (IDS)",
      "Intrusion Prevention System (IPS)",
      "Virtual Private Network (VPN) Gateway",
      "Network Interface Card (NIC)"
    ],
    cybersecurityHardware: [
      "Next-Generation Firewall (NGFW)",
      "Intrusion Detection System (IDS)",
      "Intrusion Prevention System (IPS)",
      "Unified Threat Management (UTM) Appliance",
      "Secure Web Gateway (SWG) Appliance",
      "Data Loss Prevention (DLP) Appliance",
      "Security Information and Event Management (SIEM) Appliance",
      "Hardware Security Module (HSM)",
      "Two-Factor Authentication (2FA) Device",
      "Biometric Authentication Device",
      "Hardware Token",
      "Hardware Encryption Device",
      "Secure USB Drive",
      "Hardware Keylogger Detector",
      "Network TAP (Test Access Point)",
      "Packet Capture Appliance"
    ],
    inputDevices: [
      "Keyboard",
      "Mouse",
      "Scanner",
      "Webcam",
      "Microphone",
      "Graphics Tablet",
      "Barcode Scanner",
      "Fingerprint Reader"
    ],
    outputDevices: [
      "Monitor (Display)",
      "Printer",
      "Speakers",
      "Headset"
    ],
    storageDevices: [
      "USB Flash Drive",
      "External Hard Drive",
      "External SSD",
      "External DVD/Blu-ray Drive",
      "Floppy Disk Drive (Less common nowadays)"
    ],
    communicationDevices: [
      "Wi-Fi Router",
      "Bluetooth Adapter",
      "4G/LTE Router",
      "Video Adapter (VGA/HDMI/DVI)"
    ],
    extensionDevices: [
      "Power Adapter",
      "Uninterruptible Power Supply (UPS)",
      "Rechargeable Batteries"
    ],
    inputOutputDevices: [
      "Joystick/Gamepad",
      "USB Hub"
    ]
  }
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCategoryChange = value => {
    setSelectedCategory(value);
    setSelectedSubCategory(null);
    setSelectedItem(null);
  };

  const handleSubCategoryChange = value => {
    setSelectedSubCategory(value);
    setSelectedItem(null);
  };

  const handleItemChange = value => {
    setSelectedItem(value);
  };

  return (
   
      <DashboardShell>
      <DashboardHeader heading="Inventory" text="Here, you can etc.">
        </DashboardHeader>
        <section className="grid gap-4">
     <div className="flex gap-4">
      <Select onValueChange={handleCategoryChange} >
        <SelectTrigger className="w-[210px]">
          <SelectValue placeholder="Select a category" onChange={handleCategoryChange} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            {Object.keys(hardwareAndSoftware).map(category => (
              <SelectItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {selectedCategory === 'hardware' && (
        <Select onValueChange={handleSubCategoryChange}>
          <SelectTrigger className="w-[210px]">
            <SelectValue placeholder="Select a sub-category"  />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sub-Categories</SelectLabel>
              {Object.keys(hardwareAndSoftware.hardware).map(cat => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}

      {selectedCategory === 'software' && (
        <Select onValueChange={handleSubCategoryChange}>
          <SelectTrigger className="w-[210px]">
            <SelectValue placeholder="Select a sub-category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sub-Categories</SelectLabel>
              <SelectItem value="onPremise">On-Premise</SelectItem>
              <SelectItem value="cloudBased">Cloud-Based</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}

      {selectedCategory && selectedSubCategory && (
          <Select onValueChange={handleItemChange}>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="Select an item" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Items</SelectLabel>
                {hardwareAndSoftware[selectedCategory][selectedSubCategory].map(item => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
      )}



      {/* {selectedItem && (
        <div>
          <h3>Selected Item:</h3>
          <p>{selectedItem}</p>
        </div>
      )} */}
    </div>

    {selectedItem ? (
      selectedCategory === 'software' ? <Software data={{
        type : selectedCategory,
        category : selectedSubCategory,
        item : selectedItem
      }}/> :  <Hardware data={{
        type : selectedCategory,
        category : selectedSubCategory,
        item : selectedItem
      }}/>
    ) : null  }

    </section>
    </DashboardShell>

  
  );
}

export default App;
