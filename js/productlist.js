var a = "Airconditioning";
var d = "Domestic";
var h = "HVAC & Commercial";
var t = "Tools & Accessories";

var products = [
["Value Charging Hoses", "Value", t],
["Value Digital Clamp Meter", "Value", t],
["Value Digital Micron Gauge", "Value", t],
["Value Double Gauge Manifold", "Value", t],
["Value Flaring Tool", "Value", t],
["Value Hydraulic Expander", "Value", t],
["Value Manual Expander", "Value", t],
["Value Quick Couplers", "Value", t],
["Value Ratchet Spanner", "Value", t],
["Value Sealing Plier", "Value", t],
["Value Tubecutter", "Value", t],
["Value Tubebender", "Value", t],
["Value Vacuum Pump", "Value", t],
["AIPL PU Foam Spray", "AIPL", t],
["AIPL Aluminum Tape", "AIPL", t],
["AIPL Nitrile Foam Tape", "AIPL", t],
["AIPL Duct Tape", "AIPL", t],
["AIPL PVC Insulation Tape 48mm", "AIPL", t],
["AIPL BOPP Tape", "AIPL", t],
["AIPL AB80", "AIPL", t],
["Value Recovery Unit", "Value", t],
["Value Refrigerant Scale", "Value", t],
["Value Single Gauge Manifold", "Value", t],
["Value Deburring Tool", "Value", t],
["Value Capillary Tube Plier", "Value", t],
["Iron Bull Access Valve", "Iron Bull", t],
["Iron Bull Condensers", "Iron Bull", d],
["Danfoss Liquid Line Filter Drier", "Danfoss", h],
["Danfoss Expansion Valve", "Danfoss", h],
["Danfoss Temperature Controller", "Danfoss", h],
["Danfoss Shut-Off Valve", "Danfoss", h],
["Danfoss Ball Valve", "Danfoss", h],
["Danfoss Orifice", "Danfoss", h],
["Danfoss NRV Check Valve", "Danfoss", h],
["Danfoss Sight Glass", "Danfoss", h],
["Dosea Bottle Shelf", "Dosea", d],
["Dosea Fan Motor", "Dosea", d],
["Dosea ATM Timer", "Dosea", a],
["BP Refcool Can Tap Valve", "BP Refcool", t],
["BP Refcool Blend Vaporizer", "BP Refcool", t],
["BP Refcool Leak Locator", "BP Refcool", t],
["BP Refcool Extreme Ultra", "BP Refcool", t],
["BP Refcool Micro Bluvac", "BP Refcool", t],
["BP Refcool Drain Tabs", "BP Refcool", t],
["BP Refcool Acid Tabs", "BP Refcool", t],
["BP Refcool Evo Tabs", "BP Refcool", t],
["BP Refcool Kino Tabs", "BP Refcool", t],
["AIPL PVC Insulation Tape 18mm", "AIPL", t],
["DIJ Flare Nut Short Neck", "DIJ", t],
["DIJ Flare Tee", "DIJ", t],
["DIJ Flare Nut Long Neck", "DIJ", t],
["DIJ Reducing Tee", "DIJ", t],
["DIJ Dead Nut", "DIJ", t],
["DIJ Half Union Tee", "DIJ", t],
["DIJ Reducing Nut", "DIJ", t],
["DIJ Female Elbow", "DIJ", t],
["DIJ Flare Union", "DIJ", t],
["DIJ Female Coupling", "DIJ", t],
["DIJ Condenser Union", "DIJ", t],
["DIJ Charging Adapter", "DIJ", t],
["DIJ Half Union", "DIJ", t],
["DIJ Reducing Union", "DIJ", t],
["DIJ Carrier Adapter", "DIJ", t],
["DIJ Flare Seal Plug", "DIJ", t],
["DIJ Nurling Cap", "DIJ", t],
["DIJ Cylinder Adopter", "DIJ", t],
["DIJ Charging Union With Pin", "DIJ", t],
["DIJ Nitrogen Union", "DIJ", t],
["DIJ Gauge Adapter", "DIJ", t],
["DIJ Split Valve Cap", "DIJ", t],
["DIJ Flare Elbow", "DIJ", t],
["DIJ Flare Adapter", "DIJ", t],
["DIJ Half Union Elbow", "DIJ", t],
["DIJ Cylinder Valve", "DIJ", t],
["DIJ Ball Valve", "DIJ", t],
["Dosea Frost Free Fan Blades", "Dosea", d],
["Dosea Airconditioner Fan Blades", "Dosea", a],
["Dosea Shaded Pole Motor", "Dosea", h],
["Dosea Aluminum Fan Blade", "Dosea", h],
["Dry All Liquid Line Filter Drier", "Dry All", h],
["Dry All Replaceable Core Shell", "Dry All", h],
["Dry All Filter Drier Core", "Dry All", h],
["Dry All Suction Line Accumulator", "Dry All", h],
["Dry All Suction Line Heat Exchanger Accumulator", "Dry All", h],
["Dry All Liquid Refrigerant Receiver", "Dry All", h],
["Dry All Oil Separator", "Dry All", h],
["Dry All Coaxial Heat Exchanger", "Dry All", h],
["Dry All Brazed Plate Heat Exchanger", "Dry All", h],
["Dry All Shell & Tube Heat Exchanger", "Dry All", h],
["Dry All Swimming Pool Heat Exchanger", "Dry All", h],
["Dry All Economiser", "Dry All", h],
["Dry All Rotolock Valve", "Dry All", h],
["Dry All Moisture & Liquid Indicator", "Dry All", h],
["Dry All Ball Valve", "Dry All", h],
["Dry All Fusible Plug", "Dry All", h],
["Dry All Vibration Absorber", "Dry All", h],
["EcoAB Mini Tubecutter", "EcoAB", t],
["EcoAB Tubecutter EB1021", "EcoAB", t],
["EcoAB Tubecutter EB1036", "EcoAB", t],
["EcoAB Tubecutter EB206", "EcoAB", t],
["EcoAB Tubecutter Roller Type","EcoAB",t],
["EcoAB Flaring Tool EB2020","EcoAB",t],
["EcoAB Flaring Tool EB8010","EcoAB",t],
["EcoAB Flaring Tool EB195A","EcoAB",t],
["EcoAB Eccentric Flaring Tool EB806A","EcoAB",t],
["EcoAB Eccentric Flaring Tool EBN806A","EcoAB",t],
["EcoAB Tubebender 3in1 EBN369","EcoAB",t],
["EcoAB Tubebender Heavy Duty","EcoAB",t],
["EcoAB Multibender Kit","EcoAB",t],
["EcoAB Expander Tool Kit","EcoAB",t],
["EcoAB Hydraulic Expander","EcoAB",t],
["EcoAB Vacuum Pump","EcoAB",t],
["EcoAB Swagging Punch","EcoAB",t],
["EcoAB Pinch Off Plier","EcoAB",t],
["EcoAB Fin Comb","EcoAB",t],
["EcoAB Deburrer","EcoAB",t],
["EcoAB Tube Reamer","EcoAB",t],
["Ecorane R600a","Ecorane",a, d, h],
["Ecorane R290","Ecorane",a, d, h],
["Ecorane Hydrocarbon","Ecorane",a, d, h],
["Ecorane Butane","Ecorane",a, d, h],
["Ecorane R32","Ecorane",a, d, h],
["Ecorane R404a","Ecorane",a, d, h],
["Ecorane R410A","Ecorane",a, d, h],
["Embraco Compressor","Embraco",h],
["Emerson Compressor","Emerson",h],
["Emerson Scroll Compressor","Emerson",h],
["Emerson Expansion Valve","Emerson",h],
["Emerson Liquid Line Filter Drier","Emerson",h],
["Emerson Compressor Accessories","Emerson",h],
["G9 Spares Pigmy Lamp","G9 Spares",d],
["G9 Spares LED Lamp","G9 Spares",d],
["G9 Spares Defrost Timer Suitable For Whirlpool","G9 Spares",d],
["G9 Spares Fan Motor","G9 Spares",d],
["G9 Spares Contactor","G9 Spares",d],
["G9 Spares Defrost Timer Suitable For Godrej","G9 Spares",d],
["G9 Spares Defrost Timer Suitable For Samsung","G9 Spares",d],
["G9 Spares Defrost Timer Suitable For LG","G9 Spares",d],
["G9 Spares Relay 1 Pin","G9 Spares",d],
["G9 Spares Relay 2 Pin","G9 Spares",d],
["G9 Spares Relay 3 Pin","G9 Spares",d],
["G9 Spares Relay 4 Pin","G9 Spares",d],
["G9 Spares Relay Brown","G9 Spares",d],
["G9 Spares Relay OLP Set Suitable For Samsung","G9 Spares",d],
["G9 Spares OLP","G9 Spares",d],
["G9 Spares OLP DRB","G9 Spares",d],
["G9 Spares Relay OLP Set Suitable For Godrej","G9 Spares",d],
["G9 Spares Relay OLP Set KOI","G9 Spares",d],
["Gasman Long Neck Flare Nut","Gasman",h],
["Hicool Axial Fan Motor","Hicool",h],
["Btali Pressure Washer","Btali",t],
["Hicool Shaded Pole Motor","Hicool",h],
["Hicool Instrument Cooling Fan", "Hicool",h],
["Hongsen Charging Hoses", "Hongsen",t],
["Hongsen Can Tap Valve HS339A", "Hongsen", t],
["Hongsen Can Tap Valve HS340A", "Hongsen", t],
["Hongsen Solenoid Valve", "Hongsen", t],
["Hongsen Oil Filled Gauges HS1534", "Hongsen", t],
["Hongsen Quick Coupler HS-MX-S", "Hongsen", t],
["Hongsen Quick Coupler QC-12", "Hongsen", t],
["Hongsen Double Manifold HS-536C", "Hongsen", t],
["Hongsen Double Manifold HS-S60-105A", "Hongsen", t],
["Hongsen Charging Hose With Ball Valve", "Hongsen", t],
["Hongsen Single Manifold HS-466NAX", "Hongsen", t],
["Hongsen Single Manifold HS-468NAL", "Hongsen", t],
["Hongsen Gauge HS-211", "Hongsen", t],
["Hongsen Hand Shut-Off Valve", "Hongsen", t],
["Hongsen Digital Manifold HS-350AD", "Hongsen", t],
["Hongsen Three Way Valve HS-466N", "Hongsen", t],
["Hongsen Capillary With Nuts", "Hongsen", t],
["Hongsen Access Control Valve", "Hongsen", t],
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