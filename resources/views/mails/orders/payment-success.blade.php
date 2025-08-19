<x-mail::message>
  # Payment Successful!
  
  Thank you for the payment!
  Your payment for (ID Order) has been received!

<x-mail::button :url="''">
View
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
