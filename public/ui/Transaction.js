export default function Transaction() {
    return `
          <h3>Transaction</h3>
          <form>
            <table>
                <tbody>
                    <tr>
                    
                        <td>
                      
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Product Name:</td>
                                        <td>
                                            <input >
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Quantity:</td>
                                        <td>
                                            <input >
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Price:</td>
                                        <td>PHP: 0</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <button>add</button>
                                        </td>
                                    </tr>
                                </tbody>
                            
                            </table>

                                    

                        </td>

                        <td>
                            <table>
                                <thead>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Options</th>
                                </thead>
                                <tbody>
                                    <tr></tr>
                                </tbody>
                            
                            </table>

                            <table>
                                <tbody>
                                    <tr>
                                        <td>Promo Code:</td>
                                        <td>
                                            <input required>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Customer ID:</td>
                                        <td>
                                            <input required>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <button style="background-color: white; color: black;">Cancel</button>
                                        </td>
                                        <td>
                                            <button>Pay & Print</button>
                                        </td>
                                    </tr>

                                </tbody>
                            
                            </table>
                        
                        </td>


                    </tr>


                
                </tbody>
            </table>
          </form>
      `;
  }
  