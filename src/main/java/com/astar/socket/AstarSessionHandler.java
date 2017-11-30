package com.astar.socket;

import javax.websocket.Session;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by peter.maunatlala on 2017/11/28.
 */
public class AstarSessionHandler {
    private static Set<Session> peers = Collections.synchronizedSet(new HashSet<Session>());

    public void addSession(Session session){
        peers.add(session);
    }

    public void removeSession(Session session){
        peers.remove(session);
    }
}
