var products = [
["Value Charging Hoses", "Value", "Accessories"],
["Value Digital Clamp Meter", "Value", "Accessories"],
["Value Digital Micron Gauge", "Value", "Accessories"],
["Value Double Gauge Manifold", "Value", "Accessories"],
["Value Flaring Tool", "Value", "Accessories"],
["Value Hydraulic Expander", "Value", "Accessories"],
["Value Manual Expander", "Value", "Accessories"],
["Value Quick Couplers", "Value", "Accessories"],
["Value Ratchet Spanner", "Value", "Accessories"],
["Value Sealing Plier", "Value", "Accessories"],
["Value Tubecutter", "Value", "Accessories"],
["Value Tubebender", "Value", "Accessories"],
["Value Vacuum Pump", "Value", "Accessories"],
["AIPL PU Foam Spray", "AIPL", "Accessories"],
["AIPL Aluminum Tape", "AIPL", "Accessories"],
["AIPL Nitrile Foam Tape", "AIPL", "Accessories"],
["AIPL Duct Tape", "AIPL", "Accessories"],
["AIPL PVC Insulation Tape", "AIPL", "Accessories"],
["AIPL BOPP Tape", "AIPL", "Accessories"],
["AIPL AB80", "AIPL", "Accessories"],
["Value Recovery Unit", "Value", "Accessories"],
["Value Refrigerant Scale", "Value", "Accessories"],
["Value Single Gauge Manifold", "Value", "Accessories"],
["Value Deburring Tool", "Value", "Accessories"],
["Value Capillary Tube Plier", "Value", "Accessories"],
];
products.sort()
products.sort((a,b)=>{
	if(a[1] < b[1]){
		return -1
	} else if( a[1] > b[1]){
		return 1
	} else {
		return 0
	}});