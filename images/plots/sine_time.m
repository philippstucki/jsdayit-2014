graphics_toolkit("gnuplot");

t=[0:1/1000:1];
Y1 = sin(2*pi*10*t);
Y2 = sin(2*pi*30*t)/3;
Y3 = sin(2*pi*50*t)/5;
Y4 = sin(2*pi*70*t)/7;
Y5 = Y1+Y2+Y3+Y4;

figure(1);
subplot(5,1,1);
hold all;
grid on;
ylim([-1 1]);
plot(t(1:400),Y1(1:400),'LineWidth',1);

subplot(5,1,2);
hold all;
grid on;
ylim([-1 1]);
plot(t(1:400),Y2(1:400),'LineWidth',1);

subplot(5,1,3);
hold all;
grid on;
ylim([-1 1]);
plot(t(1:400),Y3(1:400),'LineWidth',1);

subplot(5,1,4);
hold all;
grid on;
ylim([-1 1]);
plot(t(1:400),Y4(1:400),'LineWidth',1);

subplot(5,1,5);
hold all;
grid on;
ylim([-1 1]);
plot(t(1:400),Y5(1:400),'LineWidth',1,'color','red');

figure(2);
hold all;
grid on;
bar(abs(fft(Y5)/500)(1:100),'LineWidth',1,'facecolor','blue')

saveas(1, 'timedomain.png');
saveas(2, 'frequencydomain.png');
