<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements FilamentUser
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'password',
    ];

    /**
     * The relationships tha should always be laoded with the model.
     *
     * @var array<int, string>
     */
    protected $with = ['roles'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * The user that can access the admin panel.
     */
    public function canAccessPanel(Panel $panel): bool
    {
        $role = [
            'Super Admin',
            'Admin',
        ];

        if ($panel->getId() === 'admin' && $this->hasRole($role)) {
            return true;
        }

        return false;
    }

    /**
     * Relation with Address
     * 1 User hasMany Address
     */
    public function addresses(): HasMany
    {
        return $this->hasMany(Address::class);
    }

    /**
     * Relation with Cart Items
     * 1 User hasMany Cart Items
     * User (id = 1)
        └── CartItem #1 → product_id = 3
        └── CartItem #2 → product_id = 7
     */
    public function cartItems(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }

    /**
     * Relation with Reviews
     * 1 User hasMany Reviews
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    /**
     * Relation with Orders
     * 1 User hasMany Orders
     */
    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }
}
