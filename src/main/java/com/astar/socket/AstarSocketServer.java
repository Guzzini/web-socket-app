package com.astar.socket;
import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by peter.maunatlala on 2017/11/28.
 */

@ServerEndpoint(value = "/search")
public class AstarSocketServer {

    private static final Logger LOGGER = Logger.getLogger(AstarSocketServer.class.getName());
    AstarSessionHandler astarSessionHandler = new AstarSessionHandler();

    @OnOpen
    public void onOpen(Session session){
        astarSessionHandler.addSession(session);
    }

    @OnClose
    public void onClose(Session session){
        astarSessionHandler.removeSession(session);
    }

    @OnError
    public void onError(Throwable error){}

    @OnMessage
    public String onMessage(String message, Session session){
        //return the message sent to the socket
        return "Server received [ " + message + " ]";
    }

}
