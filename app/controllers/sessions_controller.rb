
class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/'
    elsif !user
      redirect_to '/', alert: 'Invalid Username'
    else
      redirect_to '/', alert: 'Incorrect Password'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end

end
