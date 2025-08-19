<x-mail::message>
# Subscribe to our Newsletter!

Subscribe to our Newsletter and stay updated.

<x-mail::button :url="$url">
Subscribe
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>