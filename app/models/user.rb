class User < ApplicationRecord
    include BCrypt

    has_many :reviews
    has_many :recipes, through: :reviews

    def authenticate(password)
        self.password == password
    end

    def password
    @password ||= Password.new(password_digest)
    end
    
    def password=(new_password)
    @password = Password.create(new_password)
    self.password_digest = @password
    end
end
