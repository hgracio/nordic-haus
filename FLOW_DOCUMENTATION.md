# Order Management Simulation Flow - Documentation

## Overview
This Flow is designed to be called from Agentforce actions to simulate order management scenarios. It accepts inputs and returns detailed result strings.

## Flow Configuration

### Flow Type
- **Invocable Process** (can be called from external systems like Agentforce)

### Input Variables
1. **contactIdentifier** (String, Required)
   - Description: Contact email address or identification number
   
2. **actionTag** (String, Required)
   - Description: Action tag that determines which branch to execute
   - Valid values:
     - `order_status_query`
     - `order_return_action`
     - `order_refund_query`
     - `order_split_delivery_action`
     - `order_refund_action`

### Output Variable
1. **result** (String, Output)
   - Description: Long string result returned to Agentforce action

### Internal Variables
- `orderNumber` (String) - Generated order number
- `orderStatus` (String) - Order status (e.g., "Processing")
- `orderAmount` (String) - Order amount (e.g., "599.00")

## Flow Logic

### 1. Start
- Flow begins and initializes order data

### 2. Initialize Order Data (Assignment)
- Sets `orderNumber` = "ORD-{CurrentDateTime}-NH"
- Sets `orderStatus` = "Processing"
- Sets `orderAmount` = "599.00"

### 3. Decision Element
- Routes based on `actionTag` value
- 5 branches + 1 default branch

### 4. Action Branches

#### A. order_status_query
Returns:
```
ORDER STATUS QUERY RESULT
Contact Identifier: {contactIdentifier}
Order Number: {orderNumber}
Order Status: {orderStatus}
Order Amount: ${orderAmount}
Current Status Details: Your order is currently in {orderStatus} status...
Last Updated: {CurrentDateTime}
```

#### B. order_return_action
Returns:
```
ORDER RETURN ACTION RESULT
Contact Identifier: {contactIdentifier}
Order Number: {orderNumber}
Return Status: INITIATED
Return Request ID: RET-{CurrentDateTime}
Action Taken: Return request has been successfully initiated...
Initiated At: {CurrentDateTime}
```

#### C. order_refund_query
Returns:
```
ORDER REFUND QUERY RESULT
Contact Identifier: {contactIdentifier}
Order Number: {orderNumber}
Refund Status: ELIGIBLE
Eligible Refund Amount: ${orderAmount}
Refund Details: Based on your order history...
Query Date: {CurrentDateTime}
```

#### D. order_split_delivery_action
Returns:
```
ORDER SPLIT DELIVERY ACTION RESULT
Contact Identifier: {contactIdentifier}
Order Number: {orderNumber}
Split Delivery Status: CONFIGURED
Delivery Configuration: Your order has been split...
Shipment 1: Contains 2 items - Ektorp Sofa...
Shipment 2: Contains 1 item - Billy Bookshelf...
Action Completed: {CurrentDateTime}
```

#### E. order_refund_action
Returns:
```
ORDER REFUND ACTION RESULT
Contact Identifier: {contactIdentifier}
Order Number: {orderNumber}
Refund Action: PROCESSED
Refund Amount: ${orderAmount}
Refund Transaction ID: REF-{CurrentDateTime}
Refund Details: Your refund has been successfully processed...
Refund Initiated: {CurrentDateTime}
Expected Credit Date: 7 business days from {CurrentDateTime}
```

#### F. Default (Invalid action tag)
Returns:
```
ERROR: Invalid action tag provided. Supported actions: order_status_query, order_return_action, order_refund_query, order_split_delivery_action, order_refund_action. Provided action: {actionTag}
```

## How to Create in Salesforce UI

1. **Setup → Flows → New Flow**
2. Select **Autolaunched Flow**
3. Configure as **Invocable Process**:
   - Go to Flow Settings
   - Check "Allow this flow to be invoked via Apex or the REST API"
4. Add Input Variables (contactIdentifier, actionTag)
5. Add Output Variable (result)
6. Add Internal Variables (orderNumber, orderStatus, orderAmount)
7. Create the flow structure as described above
8. Activate the Flow

## Usage from Agentforce

The Flow can be called from Agentforce actions using:
- Apex: `Flow.Interview.OrderManagementSimulation`
- REST API: `/services/data/v65.0/actions/custom/flow/OrderManagementSimulation`
- Process Builder or other Flows

## Example Call
```json
{
  "inputs": [
    {
      "contactIdentifier": "customer@example.com",
      "actionTag": "order_status_query"
    }
  ]
}
```

