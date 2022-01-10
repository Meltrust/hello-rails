class V1::GreetingsController < ApplicationController
  def index
    render json: Greeting.all.sample, only: [:greeting]
  end
end
