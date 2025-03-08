import {React,useState} from 'react'
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Gaming, ItemPPicture, Settings, HeartIcon, Graph, MorraSign,ItemActivity, Close } from '../Imports/ImportImages';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBox from '../Components/AccordionBox';
import DataTable from '../Components/DataTable';
import { productListing } from '../Resource/localData';
import ProductBox from '../Components/ProductBox';
import Slider from 'react-slick';
import {settings } from '../Resources/Slider';
import useWindowDimensions from '../Components/WindowDimensions';

function ItemPage() {
    const {width} = useWindowDimensions();
    const [searchQuery, setSearchQuery] = useState('');
    const [tableData, setTableData] = useState([
      { column1: 'Transfer', column2: '0.920 ETH', column3: 'SamaxX', column4: 'Virgo_NFT_Liquidity_P...', column5: '13d ago' },
      { column1: 'Sale', column2: '0.779 WETH', column3: 'SamaxX', column4: 'Virgo_NFT_Liquidity_P...', column5: '13d ago' },
      { column1: 'Transfer', column2: '0.920 ETH', column3: 'Tkoll', column4: 'SamaxX', column5: '28d ago' },
      { column1: 'Sale', column2: '0.779 WETH', column3: 'SamaxX', column4: 'Virgo_NFT_Liquidity_P...', column5: '13d ago' },
      { column1: 'Transfer', column2: '0.920 ETH', column3: 'Tkoll', column4: 'SamaxX', column5: '28d ago' }
    ]);
    const [selectedItems, setSelectedItems] = useState([]);
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearchKeyDown = (event) => {
      if (event.key === 'Enter') {
        const firstFilteredItem = tableData.find(item => item.column1.toLowerCase().startsWith(searchQuery.toLowerCase()));
        if (firstFilteredItem) {
          handleRowClick(firstFilteredItem);
        } else {
          setSelectedItems([]);
        }
      }
    };
  
    const handleRowClick = (item) => {
      const firstWord = item.column1.split(' ')[0];
      if (!selectedItems.includes(firstWord)) {
        setSelectedItems([...selectedItems, { name: firstWord, id: Math.random() }]);
      }
    };
  
    const handleRowKeyDown = (event, item) => {
      if (event.key === 'Enter') {
        handleRowClick(item);
      }
    };
  
    const filteredData = tableData.filter((item) =>
      item.column1.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  
    const clearAllSelectedItems = () => {
      setSelectedItems([]);
    };
  
    const deleteItem = (id) => {
      setSelectedItems(selectedItems.filter((item) => item.id !== id));
    };
  

  return (
    <div>
        <Header/>
        <div className='item-page'>
        <div className='breadcrumb'>
            <div className='container'>
                <div className='flexarea'>
                    <Link to=''>
                        Marketplace
                    </Link>
                    <Link to=''>
                    Jewel Run
                    </Link>
                </div>
            </div>
        </div>
        <div className='items-grid'>
            <div className='container'>
                <Row>
                    <Col lg={6}>
                        <div className='item-box'>
                            {width > 993 ? (
                            <div className='picture'>
                            <img src={ItemPPicture} width={'100%'} alt='itempicture'/>
                            <div className='sale'>
                            on sale
                            </div>
                            </div>
                            ) : (
                            null
                            )}
                            <Accordion defaultActiveKey="0">
                            <AccordionBox eventKey="0" title="Description">
                                <p>
                                    This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. 
                                </p>
                                <div className='flexarea'>
                                    <span>By<span className='primary' style={{marginLeft:'4px'}}>AMGI<img src={Settings} style={{marginLeft:'4px'}} alt='settings'/></span></span>
                                    <span>Official store at <span className='primary'>lipsum.com</span></span>
                                </div>
                            </AccordionBox>
                            <AccordionBox eventKey="1" title="Traits">
                                <p>
                                    This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. 
                                </p>
                                <div className='flexarea'>
                                    <span>By<span className='primary' style={{marginLeft:'4px'}}>AMGI<img src={Settings} style={{marginLeft:'4px'}} alt='settings'/></span></span>
                                    <span>Official store at <span className='primary'>lipsum.com</span></span>
                                </div>
                            </AccordionBox>
                            <AccordionBox eventKey="2" title="boosts">
                                <p>
                                    This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. 
                                </p>
                                <div className='flexarea'>
                                    <span>By<span className='primary' style={{marginLeft:'4px'}}>AMGI<img src={Settings} style={{marginLeft:'4px'}} alt='settings'/></span></span>
                                    <span>Official store at <span className='primary'>lipsum.com</span></span>
                                </div>
                            </AccordionBox>
                            <AccordionBox eventKey="3" title="about my pet hooligan">
                                <p>
                                    This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. 
                                </p>
                                <div className='flexarea'>
                                    <span>By<span className='primary' style={{marginLeft:'4px'}}>AMGI<img src={Settings} style={{marginLeft:'4px'}} alt='settings'/></span></span>
                                    <span>Official store at <span className='primary'>lipsum.com</span></span>
                                </div>
                            </AccordionBox>
                            <AccordionBox eventKey="4" title="details">
                                <p>
                                    This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. 
                                </p>
                                <div className='flexarea'>
                                    <span>By<span className='primary' style={{marginLeft:'4px'}}>AMGI<img src={Settings} style={{marginLeft:'4px'}} alt='settings'/></span></span>
                                    <span>Official store at <span className='primary'>lipsum.com</span></span>
                                </div>
                            </AccordionBox>
                            </Accordion>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='item-info'>
                            <span>MY PET HOLIGAN</span>
                            <h2 className='section-heading'>Holigan #899</h2>
                            <span>Owned by<span className='primary' style={{marginLeft:'4px'}}>Lipsum Sit Amet<img src={Settings} style={{marginLeft:'4px'}} alt='settings'/></span></span>
                            {width < 993 ? (
                                <div className='picture'>
                                <img src={ItemPPicture} width={'100%'} alt='itempicture'/>
                                <div className='sale'>
                                on sale
                                </div>
                                </div>
                                ) : (
                                null
                                )}
                            <div className='timer'>
                                <span>Sale ends January 15, 2024 at 3:49 PM </span>
                                <div className='flexarea'>
                                    <div>
                                        <span className='number'>
                                        00
                                        </span>
                                        <span className='hour'>
                                        Hours
                                        </span>
                                    </div>
                                    <div>
                                        <span className='number'>
                                        00
                                        </span>
                                        <span className='hour'>
                                        Minutes
                                        </span>
                                    </div>
                                    <div>
                                        <span className='number'>
                                        00
                                        </span>
                                        <span className='hour'>
                                        Seconds
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='price'>
                                <span>Current price</span>
                                <h4><img src={MorraSign} width={'30px'} alt='morra'/> 36.39</h4>
                                <h4 className='cut-price'>45.49</h4>
                                <div className='actions'>
                                    <button className='custom-btn'>BUY NOW</button>
                                    {/* <button className='custom-btn'>ADD TO CART</button> */}
                                    <div className='heart'>
                                        <img src={HeartIcon} alt='heart'/>
                                    </div>
                                </div>
                            </div>
                            <div className='price-history'>
                                <h5>Price History</h5>
                                <div>
                                    <img src={Graph} width={'100%'} alt='graph'/>
                                </div>
                            </div>
                            <Accordion defaultActiveKey="0">
                                <AccordionBox eventKey="0" title="Listings">
                                    <DataTable/>
                                </AccordionBox>
                                <AccordionBox eventKey="1" title="Offers">
                                    <DataTable/>
                                </AccordionBox>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        {/* ITEM ACTIVITY */}
        <div className='container'>
            <div className='item-activity'>
                <div className='top-area'>
                    <h2 className='section-heading'><img src={ItemActivity} alt='item-activity'/> Item Activity</h2>
                </div>
                <div className='form-group'>
                    <input className='filter-input' type="text" placeholder='Filter' value={searchQuery} onChange={handleSearchChange} onKeyDown={handleSearchKeyDown}/>
                    {filteredData.length === 0 && <p>No matching items found.</p>}
                <div>
                    <div className='delete-btns'>
                    {selectedItems.map((item) => (
                        <div key={item.id}>
                        <button className='primary-btn'>{item.name} <img src={Close} alt='close' onClick={() => deleteItem(item.id)}/></button>
                        </div>
                    ))}
                    <div>
                        {selectedItems.length > 0 && <span onClick={clearAllSelectedItems}>Clear All</span>}
                    </div>
                    </div>
                </div>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Event</th>
                        <th>Price</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((item, index) => (
                        <tr
                        key={index}
                        onClick={() => handleRowClick(item)}
                        onKeyDown={(event) => handleRowKeyDown(event, item)}
                        tabIndex={0}
                        >
                        <td>{item.column1}</td>
                        <td>{item.column2}</td>
                        <td>{item.column3}</td>
                        <td>{item.column4}</td>
                        <td>{item.column5}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        {/* ITEM ACTIVITY */}
         {/* LATEST ITEMS */}
        <section className='collections common-styles'>
            <div className='container'>
            <div className='section-wrapper'>
                <h2 className='section-heading'>More from this collection</h2>
                <div className='style-item-slider'>
                <Slider {...settings}>
                    {
                    productListing.map((item, index) => (
                        <div key={index}>
                        <ProductBox data={item}/>
                        </div>
                    ))
                    }
                </Slider>
                </div>
            </div>
            </div>
        </section>
        </div>
        {/* LATEST ITEMS */}
        <Footer/>
    </div>
  )
}

export default ItemPage