<x-mail::message>
<h1 style="text-align: center;">Your Order Was Shipped!</h1>

<p style="text-align: center;">Dear {{ Str::title($data['name']) }},</p>

<p style="text-align: center;">Thank you for shopping with us. Your order number {{ $data['order_number'] }} has shipped. You can review the order details below:</p>

<x-mail::table>
| Information          | Details                                                     |
|----------------------|-------------------------------------------------------------|
| **Order Number**     | {{ $data['order_number'] }}                                 |
| **Payment Method**   | {{ $data['payment'] }}                                      |
| **Tracking Number**  | {{ $data['shipment_id'] }}                                  |
| **Shipped Via**      | {{ $data['shipped_via'] }}                                  |
| **Shipped At**       | {{ $data['shipped_date_time'] }}                            |
| **Shipping Fee**     | Rp. {{ number_format($data['shipping_fee'], 0, ',', '.') }} |
| **Payment Fee**      | Rp. {{ number_format($data['payment_fee'], 0, ',', '.') }}  |
| **Total Paid**       | Rp. {{ number_format($data['amount_paid'], 0, ',', '.') }}  |
</x-mail::table>

<x-mail::button :url="'/order'" color="red">
  View Order
</x-mail::button>

<x-mail::panel>
**Delivery Address:**<br>
{{ $data['address']}}
</x-mail::panel>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
