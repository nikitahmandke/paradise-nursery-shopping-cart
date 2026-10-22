import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=400&q=80",
          description: "Produces oxygen at night and removes toxins.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://images.unsplash.com/photo-1572688484437-508ea1330b7a?auto=format&fit=crop&w=400&q=80",
          description: "Resilient plant that cleans harmful indoor air pollutants.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=400&q=80",
          description: "Elegant white blooms that improve indoor humidity.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://images.unsplash.com/photo-1628178120612-4467776d5415?auto=format&fit=crop&w=400&q=80",
          description: "Lush fronds that naturally purify the air.",
          cost: "$16"
        },
        {
          name: "Rubber Plant",
          image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=400&q=80",
          description: "Broad glossy leaves that capture household dust.",
          cost: "$20"
        },
        {
          name: "Aloe Vera",
          image: "https://images.unsplash.com/photo-1567689265664-1c48de61db0b?auto=format&fit=crop&w=400&q=80",
          description: "Healing gel inside soothing air-purifying leaves.",
          cost: "$10"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=400&q=80",
          description: "Sweet calming fragrance that encourages restful sleep.",
          cost: "$14"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=400&q=80",
          description: "Delicate white flowers with an intoxicating sweet scent.",
          cost: "$22"
        },
        {
          name: "Rosemary",
          image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=400&q=80",
          description: "Pine-like fragrant herb popular for home kitchens.",
          cost: "$11"
        },
        {
          name: "Mint",
          image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=400&q=80",
          description: "Invigorating fresh herbal scent, easy to propagate.",
          cost: "$9"
        },
        {
          name: "Lemon Balm",
          image: "https://images.unsplash.com/photo-1594918032432-8b49e5488102?auto=format&fit=crop&w=400&q=80",
          description: "Pleasant citrus aroma that acts as a natural relaxant.",
          cost: "$13"
        },
        {
          name: "Eucalyptus",
          image: "https://images.unsplash.com/photo-1516048015710-7a3b4c86be43?auto=format&fit=crop&w=400&q=80",
          description: "Crisp menthol aroma that clears respiratory airways.",
          cost: "$19"
        }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=400&q=80",
          description: "Thrives on neglect and low light conditions.",
          cost: "$24"
        },
        {
          name: "Pothos",
          image: "https://images.unsplash.com/photo-1596547610802-8b9a224a1b02?auto=format&fit=crop&w=400&q=80",
          description: "Fast-growing vine with beautiful trailing leaves.",
          cost: "$12"
        },
        {
          name: "Cast Iron Plant",
          image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80",
          description: "Nearly indestructible foliage suitable for dark spots.",
          cost: "$25"
        },
        {
          name: "Jade Plant",
          image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80",
          description: "Hardy succulent symbolizing good fortune and prosperity.",
          cost: "$16"
        },
        {
          name: "Succulent Assortment",
          image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=400&q=80",
          description: "Requires very little water and loves bright sunny spots.",
          cost: "$15"
        },
        {
          name: "Chinese Evergreen",
          image: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=400&q=80",
          description: "Patterned decorative foliage tolerant of dry air.",
          cost: "$21"
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prevState => ({
      ...prevState,
      [plant.name]: true
    }));
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2e7d32',
        color: '#ffffff',
        padding: '16px 32px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setShowCart(false)}>
          <h2 style={{ margin: 0 }}>Paradise Nursery</h2>
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => setShowCart(false)}>Plants</span>
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setShowCart(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-12px',
              backgroundColor: '#ff5722',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 8px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {totalQuantity}
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content: Either Product Grid or Shopping Cart */}
      {!showCart ? (
        <div style={{ padding: '24px 40px', backgroundColor: '#f4fbf4', minHeight: '100vh' }}>
          {plantsArray.map((categoryObj, catIdx) => (
            <div key={catIdx} style={{ marginBottom: '40px' }}>
              <h2 style={{ borderBottom: '2px solid #2e7d32', paddingBottom: '8px', color: '#1b5e20' }}>
                {categoryObj.category}
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '24px',
                marginTop: '16px'
              }}>
                {categoryObj.plants.map((plant, pIdx) => (
                  <div key={pIdx} style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <div style={{ margin: '12px 0' }}>
                      <h3 style={{ margin: '6px 0', color: '#2e7d32' }}>{plant.name}</h3>
                      <p style={{ fontSize: '14px', color: '#666', height: '40px' }}>{plant.description}</p>
                      <h4 style={{ margin: '8px 0', fontSize: '18px' }}>{plant.cost}</h4>
                    </div>
                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                      style={{
                        padding: '10px',
                        backgroundColor: addedToCart[plant.name] ? '#cccccc' : '#2e7d32',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: addedToCart[plant.name] ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold',
                        transition: 'background-color 0.2s'
                      }}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
