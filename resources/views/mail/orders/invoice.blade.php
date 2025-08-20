<x-mail::message>
<h1 style="text-align: center;">Thank You For Your Order</h1>

The body of your message.

<x-mail::button :url="''">
Button Text
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
