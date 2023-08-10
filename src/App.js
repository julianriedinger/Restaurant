import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://172.20.10.10:3002'); 

function App() {
  const [orders, setOrders] = useState({
    'Tisch 1': [],
    'Tisch 2': [],
    'Tisch 3': [],
    'Tisch 4': [],
    'Tisch 5': [],
    'Tisch 6': [],
    'Tisch 7': [],
    'Bar' :  [],
    'Draußen' : []
  });

  const [selectedTable, setSelectedTable] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

const currentOrdersForTable = selectedTable ? orders[selectedTable] || [] : [];

  useEffect(() => {
    socket.on('updateOrders', (updatedOrders) => {
        setOrders(updatedOrders);
    });

    return () => {
        socket.off('updateOrders');
    };
  }, []);
  const items = [
    { id: 1, name: "Semmel", price: 0.40 },
    { id: 2, name: "Salzstangerl", price: 0.70 },
    { id: 3, name: "Brot", price: 0.30 },
    { id: 4, name: "Mehlspiese", price: 1.50 },
    { id: 5, name: "Kornspitz", price: 0.80 },
    { id: 6, name: "Leberkäse", price: 1.30 },
    { id: 7, name: "Wurst", price: 0.10 },
    { id: 8, name: "Frankfurter Würstel", price: 1.10 },
    { id: 9, name: "Deberezina Würstel", price: 1.20 },
    { id: 10, name: "Käsekrainer", price: 1.40 },
    { id: 11, name: "Puszta Würstel", price: 1.50 },
    { id: 12, name: "Senf", price: 0.10 },
    { id: 13, name: "Ketchup", price: 0.10 },
    { id: 14, name: "Mayo", price: 0.10 },
    { id: 15, name: "Manner Schnitten", price: 0.60 },
    { id: 16, name: "Mars", price: 0.60 },
    { id: 17, name: "Snickers", price: 0.60 },
    { id: 18, name: "Mayo", price: 0.10 },
    { id: 19, name: "Liotta Vanille-Eis 5 l", price: 0.50 },
    { id: 20, name: "Manner Schnitten", price: 0.60 },
    { id: 21, name: "Mars", price: 0.60 },
    { id: 22, name: "Snickers", price: 0.60 },
    { id: 23, name: "KitKat", price: 0.60 },
    { id: 24, name: "Bohnensuppe", price: 2.20 },
    { id: 25, name: "Gulaschsuppe", price: 2.20 },
    { id: 26, name: "Käse", price: 0.10 },
    { id: 27, name: "Ei", price: 0.30 },
    { id: 28, name: "Magnum Classic", price: 2.00 },
    { id: 29, name: "Magnum Mandel", price: 2.10 },
    { id: 30, name: "Cornetto Classic", price: 1.50 },
    { id: 31, name: "Cornetto Erdbeer", price: 1.50 },
    { id: 32, name: "Pickup", price: 0.50 },
    { id: 33, name: "Erdnüsse", price: 0.70 },
    { id: 34, name: "Kaugummi", price: 0.50 },
    { id: 35, name: "Auer Baumstämme", price: 0.90 },
    { id: 36, name: "Auer Tortenecken", price: 0.90 },
    { id: 37, name: "Knoppers", price: 0.30 },
    { id: 38, name: "Pizza", price: 4.00 },
    { id: 39, name: "Pizzaschnitte", price: 2.40 },
    { id: 40, name: "Toast", price: 1.80 },
    { id: 41, name: "Chips Classic", price: 0.70 },
    { id: 42, name: "Soletti", price: 0.70 },
    { id: 43, name: "Milka Nussini", price: 0.40 },
    { id: 44, name: "Bier 0,5l", price: 1.20 },
    { id: 45, name: "Bier 0,33l", price: 1.10 },
    { id: 46, name: "Radler Bier", price: 1.30 },
    { id: 47, name: "Wein 1/8l", price: 0.40 },
    { id: 48, name: "Sekt Fl.", price: 7.00 },
    { id: 49, name: "Jägermeister 2cl", price: 0.70 },
    { id: 50, name: "Bierflaschen Stk.", price: 0.10 },
    { id: 51, name: "Bierkisten Stk.", price: 3.05 },
    { id: 52, name: "Weinflasche Stk.", price: 0.30 },
    { id: 53, name: "Weinkiste Stk.", price: 3.05 },
    { id: 54, name: "Coca Cola 1/4l", price: 0.40 },
    { id: 2000, name: "Coca Cola gesp. 1/4l", price: 0.30 },
    { id: 55, name: "Coca Cola 0,33l", price: 0.60 }, 
    { id: 56, name: "Coca Cola gesp. 0,33l", price: 0.40 }, 
    { id: 57, name: "Coca Cola 1/2l", price: 0.80 },
    { id: 58, name: "Coca Cola gesp. 1/2l", price: 0.60 },
    { id: 59, name: "Schmex 1/4l", price: 0.40 },
    { id: 60, name: "Schmex gesp. 1/4l", price: 0.30 },
    { id: 61, name: "Schmex 0,33l", price: 0.60 },
    { id: 62, name: "Schmex gesp. 0,33l", price: 0.40 },
    { id: 63, name: "Schmex 1/2l", price: 0.80 },
    { id: 64, name: "Schmex gesp. 1/2l", price: 0.60 },
    { id: 65, name: "Cappy 1/4l", price: 0.40 },
    { id: 66, name: "Cappy gesp. 1/4l", price: 0.30 },
    { id: 67, name: "Cappy 0,33l", price: 0.60 },
    { id: 68, name: "Cappy gesp. 0,33l", price: 0.40 },
    { id: 69, name: "Cappy 1/2l", price: 0.80 },
    { id: 70, name: "Cappy gesp. 1/2l", price: 0.60 },
    { id: 71, name: "Mineral/Soda 1/4l", price: 0.10 },
    { id: 72, name: "Mineral/Soda 0,33l", price: 0.15 },
    { id: 73, name: "Mineral/Soda 1/2l", price: 0.20 },
    { id: 74, name: "Red Bull", price: 1.40 },
    { id: 75, name: "Pfanner Pago ltg. 1/4l", price: 0.90 },
    { id: 76, name: "Pfanner Pago ltg. 0,33l", price: 0.90 },
    { id: 77, name: "Pfanner Pago ltg. 1/2l", price: 0.90 },
    { id: 78, name: "Pfanner Pago gesp. 1/4l", price: 1.00 },
    { id: 79, name: "Pfanner Pago gesp. 0,33l", price: 1.00 },
    { id: 80, name: "Pfanner Pago gesp. 1/2l", price: 1.00 },
    { id: 81, name: "Apfelsaft 1/4l", price: 0.40 },
    { id: 82, name: "Apfelsaft gesp. 1/4l", price: 0.30 },
    { id: 83, name: "Apfelsaft 0,33l", price: 0.60 },
    { id: 84, name: "Apfelsaft gesp. 0,33l", price: 0.40 },
    { id: 85, name: "Apfelsaft 1/2l", price: 0.80 },
    { id: 86, name: "Apfelsaft gesp. 1/2l", price: 0.60 },
    { id: 87, name: "Orangensaft 1/4l", price: 0.40 },
    { id: 89, name: "Orangensaft gesp. 1/4l", price: 0.30 },
    { id: 90, name: "Orangensaft 0,33l", price: 0.60 },
    { id: 91, name: "Orangensaft gesp. 0,33l", price: 0.40 },
    { id: 92, name: "Orangensaft 1/2l", price: 0.80 },
    { id: 93, name: "Orangensaft gesp. 1/2l", price: 0.60 },
    { id: 94, name: "Alkoholfreies Bier", price: 1.30 },
    { id: 95, name: "Tee", price: 0.20 },
    { id: 96, name: "Melange", price: 0.40 },
    { id: 97, name: "Cappucino", price: 0.40 },
    { id: 98, name: "kl. Espresso", price: 0.40 },
    { id: 99, name: "gr. Espresso", price: 0.40 },
    { id: 100, name: "kl. Brauner", price: 0.40 },
    { id: 101, name: "gr. Brauner", price: 0.40 },
    { id: 102, name: "Verlängerter", price: 0.40 },
    { id: 103, name: "Eiskaffee", price: 1.30 },
    { id: 104, name: "Flasche 0,2l", price: 0.10 },
    { id: 105, name: "Kiste 0,2l", price: 3.05 },
    { id: 106, name: "Flasche 1l", price: 0.30 },
    { id: 107, name: "Kiste 1l", price: 3.05 },
    { id: 108, name: "Sozi 0,2l", price: 0.10 },
    { id: 109, name: "Sozi 0.3l", price: 0.15 },
    { id: 110, name: "Sozi 0.5l", price: 0.20 },
    { id: 111, name: "Brot mit Belag", price: 0.90 },
    { id: 112, name: "Kornspitz mit Belag", price: 1.40 },
    { id: 113, name: "Spezi Semmel" , price: 1.80 },
    { id: 114, name: "Semmel mit Belag", price: 1.00 },
    { id: 115, name: "Eierspeis", price: 1.50 },
    { id: 116, name: "Ham & Eggs", price: 1.50 },
    { id: 117, name: "Bauerntoast", price: 1.50 }
  ];



    useEffect(() => {
      socket.on('updateOrders', (updatedOrders) => {
          setOrders(updatedOrders);
      });

      return () => {
          socket.off('updateOrders');
      };
    }, []);

    const updateOrders = (newOrders) => {
        setOrders(newOrders);
       //socket.emit('updateOrder', newOrders);
    };

   
    const sendOrder = () => {
      socket.emit('sendOrder', orders);
    };

  const addToOrder = (item) => {
    const orderItem = { ...item, note: "", selected: false }; // Hinzufügen der `selected` Eigenschaft
    updateOrders(prevOrders => ({
      ...prevOrders,
      [selectedTable]: [...(prevOrders[selectedTable] || []), orderItem]
    }));
}

const calculateSubTotal = (items) => {
  const subTotal = items.reduce((acc, item) => item.selected ? acc + item.price : acc, 0);
  return Number(subTotal.toFixed(2)); // Rundet den Betrag auf zwei Dezimalstellen und wandelt ihn zurück in eine Zahl
}

  const removeFromOrder = (index) => {
    const newOrders = [...(currentOrdersForTable || [])];
    newOrders.splice(index, 1);
    updateOrders(prevOrders => ({ ...prevOrders, [selectedTable]: newOrders }));
  }

  const updateNote = (index, note) => {
    const newOrders = [...(currentOrdersForTable || [])];
    newOrders[index].note = note;
    updateOrders(prevOrders => ({ ...prevOrders, [selectedTable]: newOrders }));
  }

  const calculateTotal = () => {
    const currentTableOrder = currentOrdersForTable || [];
    const total = currentTableOrder.reduce((acc, item) => acc + item.price, 0);
    return Number(total.toFixed(2)); // Rundet den Betrag auf zwei Dezimalstellen und wandelt ihn zurück in eine Zahl
}

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelectedItem = (index) => {
    const newOrders = [...(currentOrdersForTable || [])];
    newOrders[index].selected = !newOrders[index].selected;
    updateOrders(prevOrders => ({ ...prevOrders, [selectedTable]: newOrders }));
}

const handleTableChange = (e) => {
  setSelectedTable(e.target.value);
  setSearchTerm(""); // Reset the search term
}


return (
  <div className="App">
    <h1>Bestellseite</h1>
    <h2>Tischauswahl</h2>
    <select onChange={handleTableChange} value={selectedTable}>
      <option value={null}>Tisch auswählen...</option>
      {['Tisch 1', 'Tisch 2', 'Tisch 3', 'Tisch 4', 'Tisch 5', 'Tisch 6', 'Tisch 7'].map(table => (
        <option key={table} value={table}>{table}</option>
      ))}
    </select>

    {selectedTable && (
      <>
        <h2>Menü</h2>
        <input 
          type="text" 
          placeholder="Suche..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="product-list">
          {filteredItems.map(item => (
            <li key={item.id} onClick={() => addToOrder(item)} style={{ cursor: "pointer" }}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>

        <h2>Warenkorb für {selectedTable}</h2>
        <ul>
          {(currentOrdersForTable || []).map((item, index) => (
            <li key={index} style={{ background: item.selected ? '#f9f9f9' : 'transparent' }}>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => toggleSelectedItem(index)}
              />
              {item.name} - ${item.price}
              <button onClick={() => removeFromOrder(index)}>Entfernen</button>
              <input 
                type="text" 
                placeholder="Notiz hinzufügen" 
                value={item.note}
                onChange={(e) => updateNote(index, e.target.value)}
              />
            </li>
          ))}
          <li style={{ borderTop: "1px solid #eee", marginTop: "10px", paddingTop: "10px" }}>
            Zwischensumme: ${calculateSubTotal(currentOrdersForTable || [])}
          </li>
        </ul>
        <p>Gesamtbetrag: ${(calculateTotal())}</p>
          <button onClick={sendOrder}>Bestellung senden</button>
      </>
    )}
  </div>
);

}

export default App;
