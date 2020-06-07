# README

## users table
|Column|Type|Options|
|------|----|-------|
|name|string|index: true,null: false, unique: true|
|mail|string|null: false|
|password|string|null: false|

### Association
- has_many :groups,though:groups_users
- has_many :messages
- has_many :groups_users


## groups table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|

### Association
- has_many :users


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messages table
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integger|null: false, foreign_key: true|

### Association
-belongs to :user

