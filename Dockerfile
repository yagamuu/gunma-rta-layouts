FROM cma2819/nodecg

RUN nodecg install speedcontrol/nodecg-speedcontrol && nodecg defaultconfig nodecg-speedcontrol
RUN nodecg install cma2819/speedcontrol-additions && nodecg defaultconfig speedcontrol-additions